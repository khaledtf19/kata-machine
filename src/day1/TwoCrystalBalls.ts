export default function two_crystal_balls(breaks: boolean[]): number {
  let jumb = Math.floor(Math.sqrt(breaks.length));
  let i = jumb;
  for (; i < breaks.length; i += jumb) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jumb;
  for (let j = 0; i <= breaks.length && j <= jumb; jumb++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}
