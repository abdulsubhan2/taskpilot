// simple cookie utilities
export function setCookie(name, value, days) {
  let expires = "";
  if (typeof days === 'number') {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  // if days is undefined/null -> session cookie (expires when browser closes)
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

export function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return decodeURIComponent(match[2]);
  return null;
}

export function eraseCookie(name) {
  // set expiry in the past
  document.cookie = name + "=; Max-Age=0; path=/";
}
