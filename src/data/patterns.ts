import type { FrameworkImplementation } from "@/components/framework-tabs";

export interface Pattern {
  slug: string;
  name: string;
  title: string;
  description: string;
  teaches: string;
  whenToUse: string;
  preview: string;
  frameworks: FrameworkImplementation[];
}

export const patterns: Pattern[] = [
  {
    slug: "api-route",
    name: "api-route.ts",
    title: "API Route",
    description: "Validation, auth, service call, consistent response format.",
    teaches:
      "How to structure API routes that validate input with Zod, check auth, delegate to services, and return typed responses.",
    whenToUse:
      "Every API endpoint. This is the entry point pattern for all server-side request handling.",
    preview: `export async function POST(req: NextRequest) {\n  const body = schema.parse(await req.json())\n  const result = await service.create(body)\n  return NextResponse.json(result)\n}`,
    frameworks: [
      {
        framework: "nextjs",
        label: "Next.js",
        language: "TypeScript",
        code: `import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { projectService } from "@/services/project";
import { getSession } from "@/lib/auth";
import { ApiError } from "@/lib/errors";

const CreateProjectSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  workspaceId: z.string().uuid(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = CreateProjectSchema.parse(await req.json());
    const result = await projectService.create(body, session.userId);

    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: err.issues },
        { status: 400 }
      );
    }
    if (err instanceof ApiError) {
      return NextResponse.json(
        { error: err.message },
        { status: err.status }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}`,
      },
      {
        framework: "express",
        label: "Express",
        language: "TypeScript",
        code: `import { Router, Request, Response } from "express";
import { z } from "zod";
import { projectService } from "../services/project";
import { requireAuth } from "../middleware/auth";
import { ApiError } from "../lib/errors";

const CreateProjectSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  workspaceId: z.string().uuid(),
});

const router = Router();

router.post("/projects", requireAuth, async (req: Request, res: Response) => {
  try {
    const body = CreateProjectSchema.parse(req.body);
    const result = await projectService.create(body, req.user!.id);

    res.status(201).json(result);
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(400).json({
        error: "Validation failed",
        details: err.issues,
      });
      return;
    }
    if (err instanceof ApiError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;`,
      },
      {
        framework: "django",
        label: "Django",
        language: "Python",
        code: `from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers, status
from rest_framework.permissions import IsAuthenticated
from .services import ProjectService
from .errors import ApiError


class CreateProjectSerializer(serializers.Serializer):
    name = serializers.CharField(min_length=1, max_length=100)
    description = serializers.CharField(
        max_length=500, required=False, allow_blank=True
    )
    workspace_id = serializers.UUIDField()


class ProjectView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = CreateProjectSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            result = ProjectService.create(
                serializer.validated_data,
                request.user.id,
            )
            return Response(result, status=status.HTTP_201_CREATED)
        except ApiError as e:
            return Response(
                {"error": e.message}, status=e.status_code
            )`,
      },
      {
        framework: "rails",
        label: "Rails",
        language: "Ruby",
        code: `class ProjectsController < ApplicationController
  before_action :authenticate_user!

  def create
    validated = validate_params!
    result = ProjectService.create(
      validated, current_user.id
    )
    render json: result, status: :created
  rescue ActiveModel::ValidationError => e
    render json: {
      error: "Validation failed",
      details: e.model.errors.full_messages
    }, status: :bad_request
  rescue ApiError => e
    render json: { error: e.message }, status: e.status
  end

  private

  def validate_params!
    params.require(:project).permit(
      :name, :description, :workspace_id
    ).tap do |p|
      raise ActiveModel::ValidationError unless p[:name].present?
    end
  end
end`,
      },
    ],
  },
  {
    slug: "service",
    name: "service.ts",
    title: "Service",
    description: "Business logic, ownership checks, typed errors.",
    teaches:
      "How to encapsulate business logic in services that own their errors and enforce data access rules.",
    whenToUse:
      "Any business logic that goes beyond simple CRUD. Services are the heart of the application.",
    preview: `export class ProjectService {\n  async create(data: CreateInput): Promise<Project> {\n    // ownership check, validation, persist\n  }\n}`,
    frameworks: [
      {
        framework: "nextjs",
        label: "Next.js",
        language: "TypeScript",
        code: `import { db } from "@/lib/db";
import { ApiError } from "@/lib/errors";

interface CreateProjectInput {
  name: string;
  description?: string;
  workspaceId: string;
}

export const projectService = {
  async create(data: CreateProjectInput, userId: string) {
    // Ownership check: user must belong to workspace
    const membership = await db.workspaceMember.findFirst({
      where: { workspaceId: data.workspaceId, userId },
    });
    if (!membership) {
      throw new ApiError("NOT_FOUND", "Workspace not found", 404);
    }

    // Business rule: max 50 projects per workspace
    const count = await db.project.count({
      where: { workspaceId: data.workspaceId },
    });
    if (count >= 50) {
      throw new ApiError(
        "LIMIT_EXCEEDED",
        "Maximum 50 projects per workspace",
        422
      );
    }

    return db.project.create({
      data: {
        name: data.name,
        description: data.description ?? "",
        workspaceId: data.workspaceId,
        createdBy: userId,
      },
    });
  },
};`,
      },
      {
        framework: "express",
        label: "Express",
        language: "TypeScript",
        code: `import { db } from "../lib/db";
import { ApiError } from "../lib/errors";

interface CreateProjectInput {
  name: string;
  description?: string;
  workspaceId: string;
}

export const projectService = {
  async create(data: CreateProjectInput, userId: string) {
    const membership = await db.workspaceMember.findFirst({
      where: { workspaceId: data.workspaceId, userId },
    });
    if (!membership) {
      throw new ApiError("NOT_FOUND", "Workspace not found", 404);
    }

    const count = await db.project.count({
      where: { workspaceId: data.workspaceId },
    });
    if (count >= 50) {
      throw new ApiError(
        "LIMIT_EXCEEDED",
        "Maximum 50 projects per workspace",
        422
      );
    }

    return db.project.create({
      data: {
        name: data.name,
        description: data.description ?? "",
        workspaceId: data.workspaceId,
        createdBy: userId,
      },
    });
  },
};`,
      },
      {
        framework: "django",
        label: "Django",
        language: "Python",
        code: `from django.db import models
from .models import Project, WorkspaceMember
from .errors import ApiError


class ProjectService:
    @staticmethod
    def create(data: dict, user_id: int) -> dict:
        # Ownership check
        if not WorkspaceMember.objects.filter(
            workspace_id=data["workspace_id"],
            user_id=user_id,
        ).exists():
            raise ApiError("Workspace not found", 404)

        # Business rule: max 50 projects
        count = Project.objects.filter(
            workspace_id=data["workspace_id"]
        ).count()
        if count >= 50:
            raise ApiError(
                "Maximum 50 projects per workspace", 422
            )

        project = Project.objects.create(
            name=data["name"],
            description=data.get("description", ""),
            workspace_id=data["workspace_id"],
            created_by_id=user_id,
        )
        return {
            "id": str(project.id),
            "name": project.name,
            "description": project.description,
        }`,
      },
      {
        framework: "rails",
        label: "Rails",
        language: "Ruby",
        code: `class ProjectService
  MAX_PROJECTS = 50

  def self.create(data, user_id)
    # Ownership check
    unless WorkspaceMember.exists?(
      workspace_id: data[:workspace_id],
      user_id: user_id
    )
      raise ApiError.new("Workspace not found", :not_found)
    end

    # Business rule: max 50 projects
    count = Project.where(
      workspace_id: data[:workspace_id]
    ).count
    if count >= MAX_PROJECTS
      raise ApiError.new(
        "Maximum 50 projects per workspace",
        :unprocessable_entity
      )
    end

    Project.create!(
      name: data[:name],
      description: data[:description] || "",
      workspace_id: data[:workspace_id],
      created_by_id: user_id
    )
  end
end`,
      },
    ],
  },
  {
    slug: "component",
    name: "component.tsx",
    title: "Component",
    description: "Loading, empty, error, success states. Keyboard accessible.",
    teaches:
      "How to build components that handle all four states and are keyboard-navigable with proper ARIA attributes.",
    whenToUse:
      "Every UI component that fetches data or has interactive elements.",
    preview: `export function ProjectList({ projects }: Props) {\n  if (!projects) return <Skeleton />\n  if (projects.length === 0) return <Empty />\n  return <ul role=\"list\">...</ul>\n}`,
    frameworks: [
      {
        framework: "nextjs",
        label: "Next.js",
        language: "TypeScript (React)",
        code: `"use client";

import { useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[] | null;
  isLoading?: boolean;
  error?: string | null;
}

function Skeleton() {
  return (
    <div role="status" aria-label="Loading projects">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse h-16 bg-gray-200 rounded mb-2" />
      ))}
    </div>
  );
}

function Empty() {
  return (
    <div role="status" className="text-center py-12">
      <p className="text-gray-500">No projects yet. Create your first one.</p>
    </div>
  );
}

export function ProjectList({ projects, isLoading, error }: ProjectListProps) {
  const [selected, setSelected] = useState<string | null>(null);

  if (isLoading || !projects) return <Skeleton />;
  if (error) return <div role="alert">{error}</div>;
  if (projects.length === 0) return <Empty />;

  return (
    <ul role="list" aria-label="Projects">
      {projects.map((project) => (
        <li key={project.id}>
          <button
            type="button"
            onClick={() => setSelected(project.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelected(project.id);
              }
            }}
            aria-selected={selected === project.id}
            className="w-full text-left p-4 hover:bg-gray-50 focus-visible:outline-2"
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}`,
      },
      {
        framework: "express",
        label: "Express (EJS)",
        language: "JavaScript (EJS)",
        code: `<!-- views/projects/list.ejs -->
<% if (loading) { %>
  <div role="status" aria-label="Loading projects">
    <% for (let i = 0; i < 3; i++) { %>
      <div class="skeleton-row"></div>
    <% } %>
  </div>
<% } else if (error) { %>
  <div role="alert" class="error-banner">
    <%= error %>
  </div>
<% } else if (projects.length === 0) { %>
  <div role="status" class="empty-state">
    <p>No projects yet. Create your first one.</p>
  </div>
<% } else { %>
  <ul role="list" aria-label="Projects">
    <% projects.forEach(function(project) { %>
      <li>
        <a href="/projects/<%= project.id %>"
           class="project-card"
           tabindex="0">
          <h3><%= project.name %></h3>
          <p><%= project.description %></p>
        </a>
      </li>
    <% }); %>
  </ul>
<% } %>`,
      },
      {
        framework: "django",
        label: "Django",
        language: "HTML (Django Templates)",
        code: `{# templates/projects/list.html #}
{% if loading %}
  <div role="status" aria-label="Loading projects">
    {% for _ in "xxx" %}
      <div class="skeleton-row"></div>
    {% endfor %}
  </div>
{% elif error %}
  <div role="alert" class="error-banner">
    {{ error }}
  </div>
{% elif not projects %}
  <div role="status" class="empty-state">
    <p>No projects yet. Create your first one.</p>
  </div>
{% else %}
  <ul role="list" aria-label="Projects">
    {% for project in projects %}
      <li>
        <a href="{% url 'project-detail' project.id %}"
           class="project-card"
           tabindex="0">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </a>
      </li>
    {% endfor %}
  </ul>
{% endif %}`,
      },
      {
        framework: "rails",
        label: "Rails",
        language: "ERB (Rails Views)",
        code: `<%# app/views/projects/index.html.erb %>
<% if @loading %>
  <div role="status" aria-label="Loading projects">
    <% 3.times do %>
      <div class="skeleton-row"></div>
    <% end %>
  </div>
<% elsif @error %>
  <div role="alert" class="error-banner">
    <%= @error %>
  </div>
<% elsif @projects.empty? %>
  <div role="status" class="empty-state">
    <p>No projects yet. Create your first one.</p>
  </div>
<% else %>
  <ul role="list" aria-label="Projects">
    <% @projects.each do |project| %>
      <li>
        <%= link_to project_path(project),
            class: "project-card", tabindex: 0 do %>
          <h3><%= project.name %></h3>
          <p><%= project.description %></p>
        <% end %>
      </li>
    <% end %>
  </ul>
<% end %>`,
      },
    ],
  },
  {
    slug: "middleware",
    name: "middleware.ts",
    title: "Middleware",
    description: "Auth, request logging, rate limiting.",
    teaches:
      "How to compose middleware that authenticates, logs, and rate-limits requests with structured context.",
    whenToUse:
      "Route protection, request logging, rate limiting, and any cross-cutting concerns.",
    preview: `export function withAuth(handler: Handler) {\n  return async (req: NextRequest) => {\n    const session = await getSession(req)\n    if (!session) return unauthorized()\n    return handler(req, session)\n  }\n}`,
    frameworks: [
      {
        framework: "nextjs",
        label: "Next.js",
        language: "TypeScript",
        code: `import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 60;
const hits = new Map<string, { count: number; reset: number }>();

export function middleware(req: NextRequest) {
  const requestId = crypto.randomUUID();
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  // Rate limiting
  const now = Date.now();
  const entry = hits.get(ip);
  if (entry && now < entry.reset) {
    entry.count++;
    if (entry.count > RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }
  } else {
    hits.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW });
  }

  // Structured logging
  console.log(JSON.stringify({
    requestId,
    method: req.method,
    path: req.nextUrl.pathname,
    ip,
    timestamp: new Date().toISOString(),
  }));

  const response = NextResponse.next();
  response.headers.set("x-request-id", requestId);
  return response;
}

export const config = {
  matcher: "/api/:path*",
};`,
      },
      {
        framework: "express",
        label: "Express",
        language: "TypeScript",
        code: `import { Request, Response, NextFunction } from "express";
import { v4 as uuid } from "uuid";
import { getSession } from "../lib/auth";

// Request logging
export function requestLogger(
  req: Request, _res: Response, next: NextFunction
) {
  const requestId = uuid();
  req.requestId = requestId;
  console.log(JSON.stringify({
    requestId,
    method: req.method,
    path: req.path,
    ip: req.ip,
    timestamp: new Date().toISOString(),
  }));
  next();
}

// Auth middleware
export function requireAuth(
  req: Request, res: Response, next: NextFunction
) {
  const session = getSession(req);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  req.user = session.user;
  next();
}

// Rate limiting
const hits = new Map<string, { count: number; reset: number }>();

export function rateLimit(max = 60, windowMs = 60_000) {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip ?? "unknown";
    const now = Date.now();
    const entry = hits.get(key);
    if (entry && now < entry.reset && ++entry.count > max) {
      res.status(429).json({ error: "Too many requests" });
      return;
    }
    if (!entry || now >= entry.reset) {
      hits.set(key, { count: 1, reset: now + windowMs });
    }
    next();
  };
}`,
      },
      {
        framework: "django",
        label: "Django",
        language: "Python",
        code: `import uuid
import json
import time
from django.http import JsonResponse
from django.utils.deprecation import MiddlewareMixin


class RequestLoggingMiddleware(MiddlewareMixin):
    def process_request(self, request):
        request.request_id = str(uuid.uuid4())
        print(json.dumps({
            "request_id": request.request_id,
            "method": request.method,
            "path": request.path,
            "ip": request.META.get("REMOTE_ADDR"),
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ"),
        }))

    def process_response(self, request, response):
        response["X-Request-Id"] = getattr(
            request, "request_id", ""
        )
        return response


class RateLimitMiddleware(MiddlewareMixin):
    hits = {}
    MAX_REQUESTS = 60
    WINDOW_SECONDS = 60

    def process_request(self, request):
        ip = request.META.get("REMOTE_ADDR", "unknown")
        now = time.time()
        entry = self.hits.get(ip)

        if entry and now < entry["reset"]:
            entry["count"] += 1
            if entry["count"] > self.MAX_REQUESTS:
                return JsonResponse(
                    {"error": "Too many requests"},
                    status=429,
                )
        else:
            self.hits[ip] = {
                "count": 1,
                "reset": now + self.WINDOW_SECONDS,
            }`,
      },
      {
        framework: "rails",
        label: "Rails",
        language: "Ruby",
        code: `# app/middleware/request_logger.rb
class RequestLogger
  def initialize(app)
    @app = app
  end

  def call(env)
    request = ActionDispatch::Request.new(env)
    request_id = SecureRandom.uuid
    env["X-Request-Id"] = request_id

    Rails.logger.info({
      request_id: request_id,
      method: request.method,
      path: request.path,
      ip: request.remote_ip,
      timestamp: Time.current.iso8601
    }.to_json)

    status, headers, body = @app.call(env)
    headers["X-Request-Id"] = request_id
    [status, headers, body]
  end
end

# app/controllers/concerns/rate_limitable.rb
module RateLimitable
  extend ActiveSupport::Concern
  MAX_REQUESTS = 60
  WINDOW = 1.minute

  included do
    before_action :check_rate_limit
  end

  private

  def check_rate_limit
    key = "rate_limit:\#{request.remote_ip}"
    count = Rails.cache.increment(key, 1, expires_in: WINDOW)
    if count > MAX_REQUESTS
      render json: { error: "Too many requests" },
             status: :too_many_requests
    end
  end
end`,
      },
    ],
  },
  {
    slug: "error-handling",
    name: "error-handling.ts",
    title: "Error Handling",
    description: "Canonical error strategy — single source of truth.",
    teaches:
      "How to define typed errors, map them to HTTP responses, and never leak internal details.",
    whenToUse:
      "The foundation — import this in every service and API route. One error type to rule them all.",
    preview: `export class ApiError extends Error {\n  constructor(\n    public code: ErrorCode,\n    message: string,\n    public status: number = 500\n  ) { super(message) }\n}`,
    frameworks: [
      {
        framework: "nextjs",
        label: "Next.js",
        language: "TypeScript",
        code: `export type ErrorCode =
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION_ERROR"
  | "LIMIT_EXCEEDED"
  | "CONFLICT"
  | "INTERNAL";

const STATUS_MAP: Record<ErrorCode, number> = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_ERROR: 400,
  LIMIT_EXCEEDED: 422,
  CONFLICT: 409,
  INTERNAL: 500,
};

export class ApiError extends Error {
  public readonly status: number;

  constructor(
    public readonly code: ErrorCode,
    message: string,
    status?: number
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status ?? STATUS_MAP[code];
  }

  toJSON() {
    return {
      error: { code: this.code, message: this.message },
    };
  }
}

// Usage in API routes:
// throw new ApiError("NOT_FOUND", "Project not found")
// catch (err) { if (err instanceof ApiError) return NextResponse.json(err.toJSON(), { status: err.status }) }`,
      },
      {
        framework: "express",
        label: "Express",
        language: "TypeScript",
        code: `import { Request, Response, NextFunction } from "express";

export type ErrorCode =
  | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND"
  | "VALIDATION_ERROR" | "LIMIT_EXCEEDED"
  | "CONFLICT" | "INTERNAL";

const STATUS_MAP: Record<ErrorCode, number> = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_ERROR: 400,
  LIMIT_EXCEEDED: 422,
  CONFLICT: 409,
  INTERNAL: 500,
};

export class ApiError extends Error {
  public readonly status: number;
  constructor(
    public readonly code: ErrorCode,
    message: string,
    status?: number
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status ?? STATUS_MAP[code];
  }
}

// Global error handler middleware
export function errorHandler(
  err: Error, _req: Request,
  res: Response, _next: NextFunction
) {
  if (err instanceof ApiError) {
    res.status(err.status).json({
      error: { code: err.code, message: err.message },
    });
    return;
  }
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: { code: "INTERNAL", message: "Internal server error" },
  });
}`,
      },
      {
        framework: "django",
        label: "Django",
        language: "Python",
        code: `from rest_framework.views import exception_handler
from rest_framework.response import Response


class ApiError(Exception):
    STATUS_MAP = {
        "UNAUTHORIZED": 401,
        "FORBIDDEN": 403,
        "NOT_FOUND": 404,
        "VALIDATION_ERROR": 400,
        "LIMIT_EXCEEDED": 422,
        "CONFLICT": 409,
        "INTERNAL": 500,
    }

    def __init__(self, code: str, message: str,
                 status_code: int = None):
        self.code = code
        self.message = message
        self.status_code = (
            status_code or self.STATUS_MAP.get(code, 500)
        )
        super().__init__(message)


def api_exception_handler(exc, context):
    if isinstance(exc, ApiError):
        return Response(
            {"error": {"code": exc.code, "message": exc.message}},
            status=exc.status_code,
        )
    response = exception_handler(exc, context)
    if response is None:
        return Response(
            {"error": {"code": "INTERNAL",
                        "message": "Internal server error"}},
            status=500,
        )
    return response

# settings.py:
# REST_FRAMEWORK = {
#     "EXCEPTION_HANDLER": "myapp.errors.api_exception_handler"
# }`,
      },
      {
        framework: "rails",
        label: "Rails",
        language: "Ruby",
        code: `# app/errors/api_error.rb
class ApiError < StandardError
  STATUS_MAP = {
    unauthorized: 401,
    forbidden: 403,
    not_found: 404,
    validation_error: 400,
    limit_exceeded: 422,
    conflict: 409,
    internal: 500
  }.freeze

  attr_reader :code, :status

  def initialize(message, code = :internal, status = nil)
    @code = code
    @status = status || STATUS_MAP.fetch(code, 500)
    super(message)
  end
end

# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
  rescue_from ApiError do |e|
    render json: {
      error: { code: e.code, message: e.message }
    }, status: e.status
  end

  rescue_from StandardError do |e|
    Rails.logger.error("Unhandled: \#{e.message}")
    render json: {
      error: { code: :internal,
               message: "Internal server error" }
    }, status: :internal_server_error
  end
end`,
      },
    ],
  },
  {
    slug: "job-queue",
    name: "job-queue.ts",
    title: "Job Queue",
    description: "Background jobs: idempotency, retry, dead letter queue.",
    teaches:
      "How to build reliable background job processing with retry logic and failure handling.",
    whenToUse:
      "Email sending, webhook processing, image processing, and any work that shouldn't block the request.",
    preview: `export async function processJob(job: Job) {\n  if (await isProcessed(job.id)) return // idempotent\n  try { await execute(job) }\n  catch { await retry(job) }\n}`,
    frameworks: [
      {
        framework: "nextjs",
        label: "Next.js",
        language: "TypeScript",
        code: `import { db } from "@/lib/db";

interface Job {
  id: string;
  type: string;
  payload: Record<string, unknown>;
  attempts: number;
  maxAttempts: number;
}

const MAX_ATTEMPTS = 3;
const BACKOFF_BASE_MS = 1000;

export async function processJob(job: Job): Promise<void> {
  // Idempotency check
  const existing = await db.jobResult.findUnique({
    where: { jobId: job.id },
  });
  if (existing) return;

  try {
    await executeJob(job);
    await db.jobResult.create({
      data: { jobId: job.id, status: "completed" },
    });
  } catch (err) {
    if (job.attempts + 1 >= job.maxAttempts) {
      await db.deadLetterQueue.create({
        data: {
          jobId: job.id,
          error: String(err),
          payload: job.payload,
        },
      });
      return;
    }
    // Exponential backoff retry
    const delay = BACKOFF_BASE_MS * Math.pow(2, job.attempts);
    await scheduleRetry(job, delay);
  }
}

async function executeJob(job: Job): Promise<void> {
  switch (job.type) {
    case "send_email":
      // email logic
      break;
    case "process_webhook":
      // webhook logic
      break;
    default:
      throw new Error(\`Unknown job type: \${job.type}\`);
  }
}

async function scheduleRetry(job: Job, delayMs: number) {
  await db.job.update({
    where: { id: job.id },
    data: {
      attempts: job.attempts + 1,
      scheduledAt: new Date(Date.now() + delayMs),
    },
  });
}`,
      },
      {
        framework: "express",
        label: "Express (Bull)",
        language: "TypeScript",
        code: `import Queue, { Job as BullJob } from "bull";
import { db } from "../lib/db";

const jobQueue = new Queue("main", {
  redis: process.env.REDIS_URL,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: "exponential", delay: 1000 },
    removeOnComplete: true,
  },
});

jobQueue.process(async (job: BullJob) => {
  const { id, type, payload } = job.data;

  // Idempotency check
  const existing = await db.jobResult.findUnique({
    where: { jobId: id },
  });
  if (existing) return;

  await executeJob(type, payload);
  await db.jobResult.create({
    data: { jobId: id, status: "completed" },
  });
});

// Dead letter queue on final failure
jobQueue.on("failed", async (job, err) => {
  if (job.attemptsMade >= (job.opts.attempts ?? 3)) {
    await db.deadLetterQueue.create({
      data: {
        jobId: job.data.id,
        error: err.message,
        payload: job.data.payload,
      },
    });
  }
});

async function executeJob(
  type: string,
  payload: Record<string, unknown>
) {
  switch (type) {
    case "send_email":
      break;
    case "process_webhook":
      break;
    default:
      throw new Error(\`Unknown job type: \${type}\`);
  }
}

export { jobQueue };`,
      },
      {
        framework: "django",
        label: "Django (Celery)",
        language: "Python",
        code: `from celery import shared_task
from celery.exceptions import MaxRetriesExceededError
from .models import JobResult, DeadLetterQueue


@shared_task(
    bind=True,
    max_retries=3,
    default_retry_delay=1,
    retry_backoff=True,
)
def process_job(self, job_id: str, job_type: str,
                payload: dict):
    # Idempotency check
    if JobResult.objects.filter(job_id=job_id).exists():
        return

    try:
        execute_job(job_type, payload)
        JobResult.objects.create(
            job_id=job_id, status="completed"
        )
    except Exception as exc:
        try:
            self.retry(exc=exc)
        except MaxRetriesExceededError:
            DeadLetterQueue.objects.create(
                job_id=job_id,
                error=str(exc),
                payload=payload,
            )


def execute_job(job_type: str, payload: dict):
    handlers = {
        "send_email": handle_email,
        "process_webhook": handle_webhook,
    }
    handler = handlers.get(job_type)
    if not handler:
        raise ValueError(f"Unknown job type: {job_type}")
    handler(payload)`,
      },
      {
        framework: "rails",
        label: "Rails (Sidekiq)",
        language: "Ruby",
        code: `class ProcessJobWorker
  include Sidekiq::Worker
  sidekiq_options retry: 3

  sidekiq_retries_exhausted do |job, _ex|
    DeadLetterQueue.create!(
      job_id: job["args"].first,
      error: job["error_message"],
      payload: job["args"].last
    )
  end

  def perform(job_id, job_type, payload)
    # Idempotency check
    return if JobResult.exists?(job_id: job_id)

    execute_job(job_type, payload)
    JobResult.create!(
      job_id: job_id, status: "completed"
    )
  end

  private

  def execute_job(job_type, payload)
    case job_type
    when "send_email"
      EmailService.send(payload)
    when "process_webhook"
      WebhookService.process(payload)
    else
      raise "Unknown job type: \#{job_type}"
    end
  end
end`,
      },
    ],
  },
  {
    slug: "multi-tenant",
    name: "multi-tenant.ts",
    title: "Multi-Tenant",
    description: "Workspace scoping, tenant isolation, role-based access.",
    teaches:
      "How to scope all data access to the current workspace and enforce tenant boundaries.",
    whenToUse:
      "Any SaaS application with workspaces, teams, or organizations.",
    preview: `export function scopedQuery<T>(workspace: string) {\n  return db.query<T>()\n    .where('workspace_id', workspace)\n    // tenant isolation enforced\n}`,
    frameworks: [
      {
        framework: "nextjs",
        label: "Next.js",
        language: "TypeScript",
        code: `import { db } from "@/lib/db";
import { ApiError } from "@/lib/errors";

type Role = "owner" | "admin" | "member" | "viewer";

interface TenantContext {
  workspaceId: string;
  userId: string;
  role: Role;
}

export async function getTenantContext(
  workspaceId: string,
  userId: string
): Promise<TenantContext> {
  const membership = await db.workspaceMember.findFirst({
    where: { workspaceId, userId },
  });
  if (!membership) {
    throw new ApiError("NOT_FOUND", "Workspace not found", 404);
  }
  return {
    workspaceId,
    userId,
    role: membership.role as Role,
  };
}

export function scopedQuery(ctx: TenantContext) {
  return {
    where: { workspaceId: ctx.workspaceId },
  };
}

export function requireRole(ctx: TenantContext, ...roles: Role[]) {
  if (!roles.includes(ctx.role)) {
    throw new ApiError("FORBIDDEN", "Insufficient permissions", 403);
  }
}

// Usage:
// const ctx = await getTenantContext(workspaceId, session.userId);
// requireRole(ctx, "owner", "admin");
// const projects = await db.project.findMany(scopedQuery(ctx));`,
      },
      {
        framework: "express",
        label: "Express",
        language: "TypeScript",
        code: `import { Request, Response, NextFunction } from "express";
import { db } from "../lib/db";
import { ApiError } from "../lib/errors";

type Role = "owner" | "admin" | "member" | "viewer";

declare global {
  namespace Express {
    interface Request {
      tenant?: {
        workspaceId: string;
        userId: string;
        role: Role;
      };
    }
  }
}

export function tenantScope(
  req: Request, _res: Response, next: NextFunction
) {
  const workspaceId = req.params.workspaceId
    ?? req.headers["x-workspace-id"] as string;
  if (!workspaceId) {
    next(new ApiError("VALIDATION_ERROR", "Workspace ID required"));
    return;
  }

  db.workspaceMember.findFirst({
    where: { workspaceId, userId: req.user!.id },
  }).then((membership) => {
    if (!membership) {
      next(new ApiError("NOT_FOUND", "Workspace not found"));
      return;
    }
    req.tenant = {
      workspaceId,
      userId: req.user!.id,
      role: membership.role as Role,
    };
    next();
  });
}

export function requireRole(...roles: Role[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.tenant || !roles.includes(req.tenant.role)) {
      next(new ApiError("FORBIDDEN", "Insufficient permissions"));
      return;
    }
    next();
  };
}`,
      },
      {
        framework: "django",
        label: "Django",
        language: "Python",
        code: `from django.db import models
from .errors import ApiError


class TenantQuerySet(models.QuerySet):
    def for_workspace(self, workspace_id):
        return self.filter(workspace_id=workspace_id)


class TenantManager(models.Manager):
    def get_queryset(self):
        return TenantQuerySet(self.model, using=self._db)

    def for_workspace(self, workspace_id):
        return self.get_queryset().for_workspace(workspace_id)


class TenantModel(models.Model):
    workspace = models.ForeignKey(
        "Workspace", on_delete=models.CASCADE
    )
    objects = TenantManager()

    class Meta:
        abstract = True


class TenantMixin:
    ROLE_HIERARCHY = {
        "owner": 4, "admin": 3,
        "member": 2, "viewer": 1,
    }

    def get_tenant_context(self, request, workspace_id):
        membership = WorkspaceMember.objects.filter(
            workspace_id=workspace_id,
            user=request.user,
        ).first()
        if not membership:
            raise ApiError("Workspace not found", 404)
        return membership

    def require_role(self, membership, *roles):
        if membership.role not in roles:
            raise ApiError("Insufficient permissions", 403)

# Usage: class MyView(TenantMixin, APIView): ...`,
      },
      {
        framework: "rails",
        label: "Rails",
        language: "Ruby",
        code: `# app/models/concerns/tenant_scoped.rb
module TenantScoped
  extend ActiveSupport::Concern

  included do
    belongs_to :workspace
    default_scope { where(workspace: Current.workspace) }
  end
end

# app/models/current.rb
class Current < ActiveSupport::CurrentAttributes
  attribute :workspace, :user, :membership
end

# app/controllers/concerns/tenant_context.rb
module TenantContext
  extend ActiveSupport::Concern
  ROLES = %w[owner admin member viewer].freeze

  included do
    before_action :set_tenant_context
  end

  private

  def set_tenant_context
    workspace_id = params[:workspace_id] ||
                   request.headers["X-Workspace-Id"]
    Current.workspace = Workspace.find(workspace_id)
    Current.membership = Current.workspace
      .memberships
      .find_by!(user: current_user)
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Workspace not found" },
           status: :not_found
  end

  def require_role(*roles)
    return if roles.map(&:to_s)
                   .include?(Current.membership.role)
    render json: { error: "Insufficient permissions" },
           status: :forbidden
  end
end`,
      },
    ],
  },
  {
    slug: "mobile-screen",
    name: "mobile-screen.tsx",
    title: "Mobile Screen",
    description: "React Native screen with safe area, Dynamic Type, and 4 states.",
    teaches:
      "How to build mobile screens that handle safe area insets, accessibility scaling, platform-aware navigation, and the full loading/empty/error/success state cycle.",
    whenToUse:
      "Every React Native screen. The entry point pattern for mobile UI.",
    preview: `export function ProfileScreen() {\n  const insets = useSafeAreaInsets()\n  const { data, error, loading } = useProfile()\n  if (loading) return <ScreenSkeleton />\n}`,
    frameworks: [
      {
        framework: "react-native",
        label: "React Native",
        language: "TypeScript",
        code: `import { useSafeAreaInsets } from "react-native-safe-area-context";\n\nexport function ProfileScreen() {\n  const insets = useSafeAreaInsets();\n  const { data, error, loading } = useProfile();\n\n  if (loading) return <ScreenSkeleton />;\n  if (error) return <ErrorState retry={refetch} />;\n  if (!data) return <EmptyState />;\n\n  return (\n    <View style={{ paddingTop: insets.top }}>\n      <ProfileHeader user={data} />\n    </View>\n  );\n}`,
      },
    ],
  },
  {
    slug: "mobile-service",
    name: "mobile-service.ts",
    title: "Mobile Service",
    description: "Offline-first data with sync queue, conflict resolution, and retry.",
    teaches:
      "How to build mobile services that work offline-first with local reads, background sync queues, conflict resolution, and exponential backoff retry.",
    whenToUse:
      "Any mobile feature that needs to work without a network connection.",
    preview: `export class OfflineService {\n  async read(id: string) {\n    return localStore.get(id) ?? await api.fetch(id)\n  }\n}`,
    frameworks: [
      {
        framework: "react-native",
        label: "React Native",
        language: "TypeScript",
        code: `import AsyncStorage from "@react-native-async-storage/async-storage";\n\nexport class OfflineService<T> {\n  async read(id: string): Promise<T | null> {\n    const local = await AsyncStorage.getItem(id);\n    if (local) return JSON.parse(local);\n    const remote = await this.api.fetch(id);\n    if (remote) await AsyncStorage.setItem(id, JSON.stringify(remote));\n    return remote;\n  }\n\n  async write(id: string, data: T): Promise<void> {\n    await AsyncStorage.setItem(id, JSON.stringify(data));\n    await this.syncQueue.enqueue({ id, data, timestamp: Date.now() });\n  }\n}`,
      },
    ],
  },
  {
    slug: "game-loop",
    name: "game-loop.ts",
    title: "Game Loop",
    description: "Fixed-timestep game loop with interpolation, pause/resume, and frame budgets.",
    teaches:
      "How to implement a deterministic game loop with fixed physics timestep, visual interpolation for smooth rendering, pause/resume controls, and frame budget tracking.",
    whenToUse:
      "Any real-time game that needs consistent physics independent of frame rate.",
    preview: `class GameLoop {\n  tick(dt: number) {\n    this.accumulator += dt\n    while (this.accumulator >= STEP) {\n      this.update(STEP)\n    }\n  }\n}`,
    frameworks: [
      {
        framework: "typescript",
        label: "TypeScript",
        language: "TypeScript",
        code: `const FIXED_STEP = 1000 / 60; // 60 Hz physics\n\nclass GameLoop {\n  private accumulator = 0;\n  private lastTime = 0;\n  private running = false;\n\n  start() {\n    this.running = true;\n    this.lastTime = performance.now();\n    requestAnimationFrame(this.frame);\n  }\n\n  private frame = (now: number) => {\n    if (!this.running) return;\n    const dt = now - this.lastTime;\n    this.lastTime = now;\n    this.accumulator += dt;\n\n    while (this.accumulator >= FIXED_STEP) {\n      this.update(FIXED_STEP);\n      this.accumulator -= FIXED_STEP;\n    }\n\n    const alpha = this.accumulator / FIXED_STEP;\n    this.render(alpha); // interpolate for smooth visuals\n    requestAnimationFrame(this.frame);\n  };\n}`,
      },
    ],
  },
  {
    slug: "game-state",
    name: "game-state.ts",
    title: "Game State",
    description: "Hierarchical state machine with enter/exit hooks, history, and save/load.",
    teaches:
      "How to manage complex game states (menus, gameplay, pause, cutscenes) with clean transitions, sub-states, and serialization for save games.",
    whenToUse:
      "Any game with multiple modes (menu, play, pause, game-over) that need clean transitions.",
    preview: `class StateMachine {\n  transition(to: string) {\n    this.current.exit()\n    this.current = this.states[to]\n    this.current.enter()\n  }\n}`,
    frameworks: [
      {
        framework: "typescript",
        label: "TypeScript",
        language: "TypeScript",
        code: `interface GameState {\n  name: string;\n  enter(): void;\n  exit(): void;\n  update(dt: number): void;\n  render(): void;\n}\n\nclass StateMachine {\n  private states: Map<string, GameState> = new Map();\n  private current: GameState | null = null;\n  private history: string[] = [];\n\n  transition(to: string) {\n    if (this.current) {\n      this.history.push(this.current.name);\n      this.current.exit();\n    }\n    this.current = this.states.get(to) ?? null;\n    this.current?.enter();\n  }\n\n  back() {\n    const prev = this.history.pop();\n    if (prev) this.transition(prev);\n  }\n}`,
      },
    ],
  },
  {
    slug: "game-entity",
    name: "game-entity.ts",
    title: "Game Entity (ECS)",
    description: "Entity Component System with component stores, systems, and object pooling.",
    teaches:
      "How to organize game objects using the Entity Component System pattern — entities are IDs, components are data, systems are behavior.",
    whenToUse:
      "Games with many entities that share behaviors (bullets, enemies, particles, NPCs).",
    preview: `class World {\n  createEntity(): number {\n    return this.nextId++\n  }\n  addComponent<T>(entity: number, type: string, data: T) {\n    this.stores[type].set(entity, data)\n  }\n}`,
    frameworks: [
      {
        framework: "typescript",
        label: "TypeScript",
        language: "TypeScript",
        code: `type Entity = number;\n\nclass World {\n  private nextId = 0;\n  private stores: Map<string, Map<Entity, unknown>> = new Map();\n\n  createEntity(): Entity {\n    return this.nextId++;\n  }\n\n  addComponent<T>(entity: Entity, type: string, data: T) {\n    if (!this.stores.has(type)) this.stores.set(type, new Map());\n    this.stores.get(type)!.set(entity, data);\n  }\n\n  query(...types: string[]): Entity[] {\n    const [first, ...rest] = types;\n    const candidates = [...(this.stores.get(first)?.keys() ?? [])];\n    return candidates.filter(e =>\n      rest.every(t => this.stores.get(t)?.has(e))\n    );\n  }\n}`,
      },
    ],
  },
  {
    slug: "sse-endpoint",
    name: "sse-endpoint.ts",
    title: "SSE Endpoint",
    description: "Server-Sent Events: lifecycle, keepalive, timeout, and React hook.",
    teaches: "How to implement Server-Sent Events with proper connection lifecycle, keepalive heartbeats, timeout management, and a client-side React hook for consuming the stream.",
    whenToUse: "Real-time updates: build progress, agent activity feeds, live dashboards, notifications.",
    preview: `export function GET(req: NextRequest) {\n  const stream = new ReadableStream({\n    start(controller) {\n      const send = (data: string) =>\n        controller.enqueue(\`data: \${data}\\n\\n\`)\n    }\n  })\n}`,
    frameworks: [{ framework: "nextjs", label: "Next.js", language: "TypeScript", code: `import { NextRequest } from "next/server";\n\nexport function GET(req: NextRequest) {\n  const stream = new ReadableStream({\n    start(controller) {\n      const encoder = new TextEncoder();\n      const send = (data: string) => {\n        controller.enqueue(encoder.encode(\`data: \${data}\\n\\n\`));\n      };\n\n      // Keepalive every 30s\n      const keepalive = setInterval(() => send(":keepalive"), 30000);\n\n      // Cleanup on close\n      req.signal.addEventListener("abort", () => {\n        clearInterval(keepalive);\n        controller.close();\n      });\n\n      send(JSON.stringify({ type: "connected" }));\n    },\n  });\n\n  return new Response(stream, {\n    headers: {\n      "Content-Type": "text/event-stream",\n      "Cache-Control": "no-cache",\n      Connection: "keep-alive",\n    },\n  });\n}` }],
  },
  {
    slug: "ad-platform-adapter",
    name: "ad-platform-adapter.ts",
    title: "Ad Platform Adapter",
    description: "Split interface: setup (interactive) + runtime adapter + read-only daemon.",
    teaches: "How to integrate ad platforms with three interface tiers: interactive setup for credential flows, runtime adapter for campaign management, and read-only adapter for monitoring daemons.",
    whenToUse: "Any ad platform integration (Meta, Google, TikTok, LinkedIn, Twitter, Reddit).",
    preview: `interface AdPlatformAdapter {\n  createCampaign(config: CampaignConfig): Promise<Campaign>\n  getCampaignMetrics(id: string): Promise<Metrics>\n  pauseCampaign(id: string): Promise<void>\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `interface AdPlatformSetup {\n  getAuthUrl(): string;\n  exchangeCode(code: string): Promise<Tokens>;\n  validateCredentials(): Promise<boolean>;\n}\n\ninterface AdPlatformAdapter {\n  createCampaign(config: CampaignConfig): Promise<Campaign>;\n  getCampaignMetrics(id: string): Promise<Metrics>;\n  pauseCampaign(id: string): Promise<void>;\n  updateBudget(id: string, daily: number): Promise<void>;\n}\n\ninterface ReadOnlyAdapter {\n  getCampaignMetrics(id: string): Promise<Metrics>;\n  getAccountSpend(since: Date): Promise<number>;\n}` }],
  },
  {
    slug: "financial-transaction",
    name: "financial-transaction.ts",
    title: "Financial Transaction",
    description: "Branded Cents type, hash-chained append log, atomic writes.",
    teaches: "How to handle money safely: branded Cents type (never raw numbers), append-only transaction log with hash chaining for integrity, and atomic file writes to prevent corruption.",
    whenToUse: "Any financial operation: revenue tracking, ad spend, budget management, reconciliation.",
    preview: `type Cents = number & { __brand: "cents" };\nfunction toCents(dollars: number): Cents {\n  return Math.round(dollars * 100) as Cents;\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `type Cents = number & { __brand: "cents" };\n\nfunction toCents(dollars: number): Cents {\n  return Math.round(dollars * 100) as Cents;\n}\n\nfunction toDisplay(cents: Cents): string {\n  return \`$\${(cents / 100).toFixed(2)}\`;\n}\n\ninterface Transaction {\n  id: string;\n  amount: Cents;\n  type: "revenue" | "spend" | "transfer";\n  timestamp: string;\n  prevHash: string;\n  hash: string;\n}` }],
  },
  {
    slug: "daemon-process",
    name: "daemon-process.ts",
    title: "Daemon Process",
    description: "PID management, Unix socket API, job scheduler, signal handling.",
    teaches: "How to build a long-running daemon with PID file management, Unix socket control API, cron-like job scheduling, and graceful signal handling for start/stop/restart.",
    whenToUse: "Background services: heartbeat monitors, spend watchers, portfolio pollers, token refreshers.",
    preview: `class Daemon {\n  async start() {\n    this.writePid();\n    this.startSocket();\n    this.scheduleJobs();\n    process.on("SIGTERM", () => this.shutdown());\n  }\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `import fs from "fs";\nimport net from "net";\n\nclass Daemon {\n  private pidFile: string;\n  private socketPath: string;\n\n  async start() {\n    if (this.isRunning()) throw new Error("Already running");\n    this.writePid();\n    this.startSocket();\n    process.on("SIGTERM", () => this.shutdown());\n    process.on("SIGINT", () => this.shutdown());\n  }\n\n  private writePid() {\n    fs.writeFileSync(this.pidFile, String(process.pid));\n  }\n\n  private startSocket() {\n    const server = net.createServer((conn) => {\n      conn.on("data", (data) => this.handleCommand(data.toString()));\n    });\n    server.listen(this.socketPath);\n  }\n\n  async shutdown() {\n    fs.unlinkSync(this.pidFile);\n    fs.unlinkSync(this.socketPath);\n    process.exit(0);\n  }\n}` }],
  },
  {
    slug: "revenue-source-adapter",
    name: "revenue-source-adapter.ts",
    title: "Revenue Source Adapter",
    description: "Read-only revenue interface with Stripe + Paddle reference implementations.",
    teaches: "How to build adapters for revenue sources that normalize different payment provider APIs into a common interface for treasury reporting.",
    whenToUse: "Connecting Stripe, Paddle, Gumroad, or bank APIs to the treasury pipeline.",
    preview: `interface RevenueAdapter {\n  getTransactions(since: Date): Promise<Transaction[]>\n  getBalance(): Promise<Cents>\n  getSubscriptionMRR(): Promise<Cents>\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `interface RevenueAdapter {\n  getTransactions(since: Date): Promise<Transaction[]>;\n  getBalance(): Promise<Cents>;\n  getSubscriptionMRR(): Promise<Cents>;\n  getName(): string;\n}\n\nclass StripeAdapter implements RevenueAdapter {\n  constructor(private apiKey: string) {}\n\n  async getTransactions(since: Date) {\n    const charges = await stripe.charges.list({\n      created: { gte: Math.floor(since.getTime() / 1000) },\n    });\n    return charges.data.map(c => ({\n      id: c.id,\n      amount: c.amount as Cents,\n      type: "revenue" as const,\n      timestamp: new Date(c.created * 1000).toISOString(),\n    }));\n  }\n}` }],
  },
  {
    slug: "oauth-token-lifecycle",
    name: "oauth-token-lifecycle.ts",
    title: "OAuth Token Lifecycle",
    description: "Refresh at 80% TTL, failure escalation, vault integration.",
    teaches: "How to manage OAuth tokens with proactive refresh (before expiry), escalating failure handling, and secure vault storage for tokens that survive process restarts.",
    whenToUse: "Any OAuth integration: ad platform APIs, social media, payment processors.",
    preview: `class TokenManager {\n  async getToken(): Promise<string> {\n    if (this.shouldRefresh()) await this.refresh();\n    return this.accessToken;\n  }\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `class TokenManager {\n  private accessToken: string;\n  private refreshToken: string;\n  private expiresAt: number;\n\n  async getToken(): Promise<string> {\n    if (this.shouldRefresh()) {\n      await this.refresh();\n    }\n    return this.accessToken;\n  }\n\n  private shouldRefresh(): boolean {\n    const ttl = this.expiresAt - Date.now();\n    const threshold = (this.expiresAt - this.issuedAt) * 0.2;\n    return ttl < threshold; // Refresh at 80% TTL\n  }\n\n  private async refresh() {\n    const response = await fetch(this.tokenUrl, {\n      method: "POST",\n      body: new URLSearchParams({\n        grant_type: "refresh_token",\n        refresh_token: this.refreshToken,\n      }),\n    });\n    const data = await response.json();\n    this.accessToken = data.access_token;\n    this.expiresAt = Date.now() + data.expires_in * 1000;\n  }\n}` }],
  },
  {
    slug: "outbound-rate-limiter",
    name: "outbound-rate-limiter.ts",
    title: "Outbound Rate Limiter",
    description: "Token bucket for external API calls with per-platform limits.",
    teaches: "How to rate-limit outbound API calls to respect platform limits, using a token bucket algorithm with configurable rates per platform.",
    whenToUse: "Any external API integration with rate limits: ad platforms, social APIs, email services.",
    preview: `class RateLimiter {\n  async acquire(): Promise<void> {\n    while (this.tokens <= 0) {\n      await this.waitForRefill();\n    }\n    this.tokens--;\n  }\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `class RateLimiter {\n  private tokens: number;\n  private maxTokens: number;\n  private refillRate: number; // tokens per second\n  private lastRefill: number;\n\n  constructor(maxPerSecond: number) {\n    this.maxTokens = maxPerSecond;\n    this.tokens = maxPerSecond;\n    this.refillRate = maxPerSecond;\n    this.lastRefill = Date.now();\n  }\n\n  async acquire(): Promise<void> {\n    this.refill();\n    while (this.tokens <= 0) {\n      await new Promise(r => setTimeout(r, 100));\n      this.refill();\n    }\n    this.tokens--;\n  }\n\n  private refill() {\n    const now = Date.now();\n    const elapsed = (now - this.lastRefill) / 1000;\n    this.tokens = Math.min(this.maxTokens, this.tokens + elapsed * this.refillRate);\n    this.lastRefill = now;\n  }\n}` }],
  },
  {
    slug: "third-party-script",
    name: "third-party-script.ts",
    title: "Third-Party Script",
    description: "External script loading with 3 states: loading, ready, error.",
    teaches: "How to load external scripts (Google Identity, Stripe.js, analytics SDKs) with a proper 3-state machine. The timeout MUST transition to 'error', not stay in 'loading' — an infinite spinner is worse than an error message.",
    whenToUse: "Any external SDK integration: payment widgets, auth providers, analytics, chat widgets, ad scripts.",
    preview: `type ScriptState = 'loading' | 'ready' | 'error';\n\nfunction loadScript(src: string) {\n  const el = document.createElement('script');\n  el.onload = () => state = 'ready';\n  el.onerror = () => state = 'error';\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `type ScriptState = 'loading' | 'ready' | 'error';\n\ninterface ThirdPartyScript {\n  state: ScriptState;\n  error: string | null;\n}\n\nfunction loadExternalScript(\n  src: string,\n  timeoutMs = 10_000\n): ThirdPartyScript {\n  const script: ThirdPartyScript = {\n    state: 'loading',\n    error: null,\n  };\n\n  const el = document.createElement('script');\n  el.src = src;\n  el.async = true;\n\n  el.onload = () => {\n    script.state = 'ready';\n    script.error = null;\n  };\n\n  el.onerror = () => {\n    script.state = 'error';\n    script.error = \`Failed to load \${src}\`;\n  };\n\n  document.head.appendChild(el);\n\n  // Timeout — MUST transition to 'error'\n  setTimeout(() => {\n    if (script.state === 'loading') {\n      script.state = 'error';\n      script.error = \`Timed out after \${timeoutMs}ms\`;\n    }\n  }, timeoutMs);\n\n  return script;\n}` }],
  },
  {
    slug: "ai-orchestrator",
    name: "ai-orchestrator.ts",
    title: "AI Orchestrator",
    description: "Agent loop, tool use, retry, circuit breaker, fallback.",
    teaches: "Three patterns for coordinating AI model calls: simple completion with structured output, agent loops with tool-use, and circuit breakers to prevent cascading AI failures. Always set MAX_ITERATIONS on agent loops.",
    whenToUse: "Any application that calls LLM APIs — from single completions to multi-step agent workflows.",
    preview: `async function agentLoop(messages: Message[]) {\n  for (let i = 0; i < MAX_ITERATIONS; i++) {\n    const response = await model.complete(messages);\n    if (response.stopReason === 'end_turn') return;\n    // Execute tool calls, append results\n  }\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `const MAX_ITERATIONS = 10;\n\nasync function agentLoop(messages: Message[]): Promise<string> {\n  for (let i = 0; i < MAX_ITERATIONS; i++) {\n    const response = await model.complete({ messages });\n    if (response.stopReason === 'end_turn') {\n      return response.content;\n    }\n    for (const toolCall of response.toolCalls) {\n      const result = await executeTool(toolCall);\n      messages.push({ role: 'tool', content: result });\n    }\n  }\n  throw new Error('Agent loop exceeded max iterations');\n}` }],
  },
  {
    slug: "ai-classifier",
    name: "ai-classifier.ts",
    title: "AI Classifier",
    description: "Classification with confidence thresholds, human fallback.",
    teaches: "How to build AI classifiers with confidence-based routing: high confidence → auto-act, medium → soft-act with confirmation, low → human review queue. Includes fallback chains and drift detection.",
    whenToUse: "Content moderation, ticket routing, sentiment analysis, intent detection — any classification task.",
    preview: `async function classify(input: string) {\n  const { label, confidence } = await model.classify(input);\n  if (confidence > 0.9) return autoAct(label);\n  if (confidence > 0.7) return softAct(label);\n  return humanReview(input);\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `interface Classification {\n  label: string;\n  confidence: number;\n}\n\nasync function classify(input: string): Promise<Classification> {\n  const result = await model.complete({\n    messages: [{ role: 'user', content: input }],\n    tools: [classifyTool],\n  });\n  return parseClassification(result);\n}\n\nfunction route(c: Classification) {\n  if (c.confidence > 0.9) return autoAct(c.label);\n  if (c.confidence > 0.7) return softAct(c.label);\n  return humanReview(c);\n}` }],
  },
  {
    slug: "ai-router",
    name: "ai-router.ts",
    title: "AI Router",
    description: "Intent-based routing with fallback chains.",
    teaches: "How to map natural language input to typed intents and dispatch to handlers. Intents are a closed set defined upfront. Ambiguity routes to clarification, not a random handler.",
    whenToUse: "Chatbots, command interpreters, natural language interfaces — any system that routes user input to actions.",
    preview: `const intents = ['create_order', 'check_status', 'cancel'] as const;\n\nasync function route(input: string) {\n  const intent = await detectIntent(input, intents);\n  return handlers[intent](input);\n}`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `const INTENTS = ['create_order', 'check_status', 'cancel', 'clarify'] as const;\ntype Intent = typeof INTENTS[number];\n\nasync function detectIntent(input: string): Promise<Intent> {\n  const result = await model.complete({\n    messages: [{ role: 'user', content: input }],\n    system: \`Classify into: \${INTENTS.join(', ')}\`,\n  });\n  const intent = parseIntent(result);\n  return INTENTS.includes(intent) ? intent : 'clarify';\n}\n\nconst handlers: Record<Intent, (input: string) => Promise<Response>> = {\n  create_order: handleCreate,\n  check_status: handleStatus,\n  cancel: handleCancel,\n  clarify: handleClarify,\n};` }],
  },
  {
    slug: "prompt-template",
    name: "prompt-template.ts",
    title: "Prompt Template",
    description: "Versioned prompts with variable injection, testing.",
    teaches: "How to treat prompts as versioned artifacts: variable injection with validation, safety guardrails injected automatically, registry pattern for managing versions. Prompt changes tracked like code changes.",
    whenToUse: "Any application with AI prompts — templates prevent string-concatenation bugs and enable A/B testing of prompt versions.",
    preview: `const template = new PromptTemplate({\n  version: '1.2',\n  text: 'Classify this {{category}}: {{input}}',\n  variables: ['category', 'input'],\n});`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `class PromptTemplate {\n  constructor(\n    private version: string,\n    private template: string,\n    private variables: string[],\n  ) {}\n\n  render(vars: Record<string, string>): string {\n    for (const v of this.variables) {\n      if (!(v in vars)) throw new Error(\`Missing: \${v}\`);\n    }\n    let result = this.template;\n    for (const [k, v] of Object.entries(vars)) {\n      result = result.replaceAll(\`{{\${k}}}\`, v);\n    }\n    return result;\n  }\n}` }],
  },
  {
    slug: "ai-eval",
    name: "ai-eval.ts",
    title: "AI Eval",
    description: "Golden datasets, scoring, regression detection.",
    teaches: "How to build evaluation suites for AI features: golden datasets (input/expected-output pairs), pluggable scoring functions, regression detection across prompt versions. Eval results stored for history.",
    whenToUse: "Before shipping any AI-powered feature. Run evals on every prompt change to catch regressions before production.",
    preview: `const suite = new EvalSuite('classifier-v2', [\n  { input: 'refund please', expected: 'refund' },\n  { input: 'where is my order', expected: 'status' },\n]);\nawait suite.run(classifyFn);`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `interface EvalCase {\n  input: string;\n  expected: string;\n}\n\nclass EvalSuite {\n  constructor(\n    private name: string,\n    private cases: EvalCase[],\n  ) {}\n\n  async run(fn: (input: string) => Promise<string>) {\n    const results = await Promise.all(\n      this.cases.map(async (c) => ({\n        ...c,\n        actual: await fn(c.input),\n        pass: (await fn(c.input)) === c.expected,\n      }))\n    );\n    const score = results.filter(r => r.pass).length / results.length;\n    return { score, results };\n  }\n}` }],
  },
  {
    slug: "ai-tool-schema",
    name: "ai-tool-schema.ts",
    title: "AI Tool Schema",
    description: "Type-safe tool definitions with provider adapters.",
    teaches: "How to define tools once and convert to any provider format (Anthropic, OpenAI). Zod schemas validate model output as untrusted input. Registry pattern manages available tools per context.",
    whenToUse: "Any application using function-calling / tool-use with LLM APIs. Define tools once, use everywhere.",
    preview: `const searchTool = defineTool({\n  name: 'search',\n  description: 'Search the knowledge base',\n  parameters: z.object({ query: z.string() }),\n  execute: async ({ query }) => search(query),\n});`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `import { z } from 'zod';\n\ninterface ToolDef<T extends z.ZodType> {\n  name: string;\n  description: string;\n  parameters: T;\n  execute: (params: z.infer<T>) => Promise<string>;\n}\n\nfunction defineTool<T extends z.ZodType>(def: ToolDef<T>) {\n  return {\n    ...def,\n    toAnthropic: () => ({\n      name: def.name,\n      description: def.description,\n      input_schema: zodToJsonSchema(def.parameters),\n    }),\n    toOpenAI: () => ({\n      type: 'function' as const,\n      function: {\n        name: def.name,\n        description: def.description,\n        parameters: zodToJsonSchema(def.parameters),\n      },\n    }),\n  };\n}` }],
  },
  {
    slug: "database-migration",
    name: "database-migration.ts",
    title: "Database Migration",
    description: "Safe migrations: backward-compatible adds, batched ops, rollback.",
    teaches: "How to run safe database migrations: add columns as nullable first, backfill then constrain, batch large table operations, test rollbacks. Every migration has a tested down migration.",
    whenToUse: "Any schema change in production — adding columns, creating indexes, removing fields, renaming tables.",
    preview: `// Safe column add: nullable first, backfill, constrain\nawait db.schema.alterTable('users', (t) => {\n  t.string('email_verified').nullable();\n});\nawait batchUpdate('users', setDefault);`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `interface Migration {\n  version: string;\n  up: (db: Database) => Promise<void>;\n  down: (db: Database) => Promise<void>;\n}\n\nasync function batchUpdate(\n  table: string,\n  update: (batch: Row[]) => Row[],\n  batchSize = 1000\n) {\n  let offset = 0;\n  while (true) {\n    const rows = await db.select(table, { limit: batchSize, offset });\n    if (rows.length === 0) break;\n    await db.updateBatch(table, update(rows));\n    offset += batchSize;\n  }\n}` }],
  },
  {
    slug: "data-pipeline",
    name: "data-pipeline.ts",
    title: "Data Pipeline",
    description: "ETL pipeline: typed stages, checkpoint/resume, quality checks.",
    teaches: "How to build ETL pipelines with typed stages, validation between steps, checkpoint/resume for long-running jobs, and idempotent processing via dedup keys.",
    whenToUse: "Data ingestion, transformation, migration — any multi-step data processing workflow.",
    preview: `const pipeline = new Pipeline([\n  extract(source),\n  validate(schema),\n  transform(normalize),\n  load(destination),\n]);\nawait pipeline.run({ checkpoint: true });`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `interface Stage<In, Out> {\n  name: string;\n  process: (input: In) => Promise<Out>;\n  validate?: (output: Out) => boolean;\n}\n\nclass Pipeline {\n  constructor(private stages: Stage<any, any>[]) {}\n\n  async run(opts: { checkpoint?: boolean } = {}) {\n    let data: any = null;\n    for (const stage of this.stages) {\n      data = await stage.process(data);\n      if (stage.validate && !stage.validate(data)) {\n        throw new Error(\`Validation failed: \${stage.name}\`);\n      }\n      if (opts.checkpoint) await this.save(stage.name, data);\n    }\n    return data;\n  }\n}` }],
  },
  {
    slug: "backtest-engine",
    name: "backtest-engine.ts",
    title: "Backtest Engine",
    description: "Walk-forward backtesting: no-lookahead, slippage, metrics.",
    teaches: "How to build a backtest engine that prevents lookahead bias, uses walk-forward validation, models slippage and commissions, and produces standard metrics (Sharpe ratio, max drawdown, profit factor).",
    whenToUse: "Trading systems, financial models, any strategy that needs validation against historical data.",
    preview: `const engine = new BacktestEngine(strategy);\nconst result = await engine.run(historicalData, {\n  slippage: 0.001,\n  commission: 0.0005,\n});\nconsole.log(result.sharpeRatio);`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `interface BacktestResult {\n  trades: Trade[];\n  sharpeRatio: number;\n  maxDrawdown: number;\n  profitFactor: number;\n  totalReturn: number;\n}\n\nclass BacktestEngine {\n  constructor(private strategy: Strategy) {}\n\n  async run(data: OHLCV[], opts: BacktestOpts): Promise<BacktestResult> {\n    const trades: Trade[] = [];\n    for (let i = this.strategy.lookback; i < data.length; i++) {\n      // Strategy only sees data[0..i] — no lookahead\n      const signal = this.strategy.evaluate(data.slice(0, i + 1));\n      if (signal) trades.push(this.executeTrade(signal, data[i], opts));\n    }\n    return this.calculateMetrics(trades);\n  }\n}` }],
  },
  {
    slug: "execution-safety",
    name: "execution-safety.ts",
    title: "Execution Safety",
    description: "Trading execution: order validation, position limits, paper/live toggle.",
    teaches: "How to build safe order execution: exchange precision from API (never hardcoded), order validation before submission, position limits, paper/live toggle via interface, reconciliation against exchange fills.",
    whenToUse: "Trading systems, financial order management — any system that submits orders to exchanges.",
    preview: `const order = validateOrder({\n  symbol: 'BTC/USDT',\n  side: 'buy',\n  size: 0.1,\n}, exchangeRules);\nawait executor.submit(order);`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `interface ExchangeRules {\n  tickSize: number;\n  lotSize: number;\n  minNotional: number;\n}\n\nfunction validateOrder(order: Order, rules: ExchangeRules): ValidatedOrder {\n  const size = roundToLot(order.size, rules.lotSize);\n  const price = roundToTick(order.price, rules.tickSize);\n  const notional = size * price;\n  if (notional < rules.minNotional) {\n    throw new Error(\`Below min notional: \${notional} < \${rules.minNotional}\`);\n  }\n  return { ...order, size, price, validated: true };\n}\n\ninterface Executor {\n  submit(order: ValidatedOrder): Promise<Fill>;\n}\n\nclass PaperExecutor implements Executor { /* simulate */ }\nclass LiveExecutor implements Executor { /* real exchange */ }` }],
  },
  {
    slug: "e2e-test",
    name: "e2e-test.ts",
    title: "E2E Test",
    description: "Playwright E2E + axe-core a11y, Page Object Model.",
    teaches: "How to write E2E tests with Playwright: Page Object Model for organization, axe-core a11y scanning as default fixture (every page gets a free a11y check), deterministic state with clean temp dirs, network mocking, auth helpers, and Core Web Vitals measurement.",
    whenToUse: "Any web application that needs browser-level testing — login flows, multi-page journeys, a11y compliance, visual regression.",
    preview: `test('homepage loads and is accessible', async ({ page }) => {\n  await page.goto('/');\n  await expect(page.getByRole('heading')).toBeVisible();\n  const results = await new AxeBuilder({ page }).analyze();\n  expect(results.violations).toHaveLength(0);\n});`,
    frameworks: [{ framework: "typescript", label: "TypeScript", language: "TypeScript", code: `import { test, expect } from '@playwright/test';\nimport AxeBuilder from '@axe-core/playwright';\n\nclass HomePage {\n  constructor(private page: Page) {}\n\n  async goto() {\n    await this.page.goto('/');\n  }\n\n  get heading() {\n    return this.page.getByRole('heading', { level: 1 });\n  }\n}\n\ntest('homepage loads', async ({ page }) => {\n  const home = new HomePage(page);\n  await home.goto();\n  await expect(home.heading).toBeVisible();\n});\n\ntest('homepage is accessible', async ({ page }) => {\n  await page.goto('/');\n  const results = await new AxeBuilder({ page }).analyze();\n  expect(results.violations).toHaveLength(0);\n});` }],
  },
];

export function getPattern(slug: string): Pattern | undefined {
  return patterns.find((p) => p.slug === slug);
}
