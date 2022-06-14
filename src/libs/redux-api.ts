export function apiHeader(token: string, params: object = {}) {
  return {
    headers: { Authorization: `Token ${token}` },
    params,
  };
}
