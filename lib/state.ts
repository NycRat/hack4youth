const defaultState = {
  cardio: [],
  weights: [],
  nutrition: [],
};

// TODO make this global state system better
export function getGlobalState(key: string): any {
  const state = localStorage.getItem(key);
  if (state == null) {
    setGlobalState(key, defaultState["cardio"]);
    return [];
  }
  return JSON.parse(state);
}

export function setGlobalState(key: string, value: any) {
  return localStorage.setItem(key, JSON.stringify(value));
}
