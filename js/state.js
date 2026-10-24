const raw = localStorage.getItem("KB__columns");
export const AppState = raw ? JSON.parse(raw) : [];