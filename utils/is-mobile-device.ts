export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') {
    // Return a default value when running on the server
    return false;
  }
  return /Mobi|Android/i.test(navigator.userAgent);
}
