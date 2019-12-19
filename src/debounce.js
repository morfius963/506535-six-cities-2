const DEBOUNCE_INTERVAL = 200;
let lastTimeout = null;

export const clearInterval = () => clearTimeout(lastTimeout);

export const debounce = (fn) => {
  if (lastTimeout) {
    clearInterval();
  }

  lastTimeout = window.setTimeout(fn, DEBOUNCE_INTERVAL);
};
