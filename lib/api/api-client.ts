interface ApiSuccess<TData> {
  data: TData;
}

interface ApiFailure {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

type ApiResponse<TData> = ApiSuccess<TData> | ApiFailure;

export class ApiError extends Error {
  public readonly code: string;
  public readonly details: unknown;
  public readonly status: number;

  public constructor(status: number, code: string, message: string, details?: unknown) {
    super(message);
    this.code = code;
    this.details = details;
    this.status = status;
  }
}

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ??
  "http://localhost:4000/api";

export async function apiRequest<TData>(
  path: string,
  init: RequestInit = {},
): Promise<TData> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    cache: init.cache ?? "no-store",
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  const payload = (await response.json()) as ApiResponse<TData>;

  if (!response.ok || "error" in payload) {
    const error = "error" in payload ? payload.error : null;

    throw new ApiError(
      response.status,
      error?.code ?? "API_REQUEST_FAILED",
      error?.message ?? "The API request failed.",
      error?.details,
    );
  }

  return payload.data;
}
