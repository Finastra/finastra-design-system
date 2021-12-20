export function shadowRoot(el: Element) {
  return el.shadowRoot ? el.shadowRoot : el;
}
