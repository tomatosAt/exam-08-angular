export function uri(path: string): string {
  return `/api-fe${path.startsWith('/') ? path : '/' + path}`;
}