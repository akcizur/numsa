/**
 * Splits text inside a DOM element into words (.w) and characters (.c)
 * for GSAP character stagger / reveal animations, while maintaining accessible
 * aria-label and preserving <br> line breaks.
 */

export function splitTextIntoChars(el: HTMLElement | null): HTMLElement[] {
  if (!el || typeof document === 'undefined') return [];
  if (el.dataset.split) {
    return Array.from(el.querySelectorAll('.c'));
  }

  const rawText = el.textContent?.replace(/\s+/g, ' ').trim() || '';
  el.setAttribute('aria-label', rawText);

  const childNodes = Array.from(el.childNodes);
  childNodes.forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const text = node.textContent || '';
    const tokens = text.split(/(\s+)/);
    const fragment = document.createDocumentFragment();

    tokens.forEach((token) => {
      if (!token) return;
      if (/^\s+$/.test(token)) {
        fragment.appendChild(document.createTextNode(' '));
        return;
      }

      const wordSpan = document.createElement('span');
      wordSpan.className = 'w';
      wordSpan.setAttribute('aria-hidden', 'true');

      token.split('').forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.className = 'c';
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
      });

      fragment.appendChild(wordSpan);
    });

    el.replaceChild(fragment, node);
  });

  el.dataset.split = '1';
  return Array.from(el.querySelectorAll('.c'));
}
