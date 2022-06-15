export function apiHeader(token: string | undefined, params: object = {}) {
  if (!token) {
    return { params };
  }

  return {
    headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
    params,
  };
}
