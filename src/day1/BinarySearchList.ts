export default function bs_list(haystack: number[], needle: number): boolean {
  let start = 0;
  let end = haystack.length;
  do {
    let mid = Math.floor(start + (end - start) / 2);
    let value = haystack[mid];
    if (needle === value) {
      return true;
    } else if (needle > value) {
      start = mid + 1;
    } else {
      end = mid;
    }
  } while (start < end);
  return false;
}
