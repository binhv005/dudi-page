/**
 * Prevents orphan words by binding the last 2-3 words of a sentence with non-breaking spaces (\u00A0).
 * This ensures that a line will never wrap with fewer than 3 words on the final line.
 */
export function preventOrphans(text, count = 3) {
  if (typeof text !== 'string' || !text.trim()) return text;
  const words = text.trim().split(/\s+/);
  if (words.length <= count) return text;
  
  const mainWords = words.slice(0, -count).join(' ');
  const endWords = words.slice(-count).join('\u00A0');
  return `${mainWords} ${endWords}`;
}
