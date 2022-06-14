export function apiHeader(token: string | null, params: object = {}) {
  if (!token) {
    return { params };
  }

  return {
    headers: { Authorization: `Token ${token}` },
    params,
  };
}
