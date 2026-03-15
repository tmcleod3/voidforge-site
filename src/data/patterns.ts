export interface Pattern {
  slug: string;
  name: string;
  title: string;
  description: string;
  teaches: string;
  whenToUse: string;
  preview: string;
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
  },
];

export function getPattern(slug: string): Pattern | undefined {
  return patterns.find((p) => p.slug === slug);
}
