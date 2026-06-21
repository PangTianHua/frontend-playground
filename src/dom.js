// Tiny DOM helpers used while studying event delegation.
// Draft, not used anywhere outside this sandbox.

export function $(sel, root = document) {
  return root.querySelector(sel);
}

export function on(el, evt, handler) {
  el.addEventListener(evt, handler);
  return () => el.removeEventListener(evt, handler);
}
