export const HTTP_URI: string = import.meta.env.VITE_API_URL

export const HTTP_HEADER: Record<string, string> = {
  Authorization: import.meta.env.VITE_API_KEY,
  Accept: 'application/json',
  'Accept-Language': 'id',
  'Content-Type': 'application/json',
  Origin: import.meta.env.APP_URL,
  'User-Agent': window.navigator.userAgent
}
