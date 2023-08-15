export function getLocalData(name: string) {
  if (typeof window !== "undefined")
    return localStorage.getItem(name) as string;
}

export function setLocalData(key: string, value: string) {
  if (typeof window !== "undefined") {
    if (["x-token", "x-vendor-token", "x-admin-token"].includes(key))
      localStorage.clear();
    localStorage.setItem(key, value);
  }
}

export function removeLocalData(key: string) {
  typeof window !== "undefined" && localStorage.removeItem(key);
}
