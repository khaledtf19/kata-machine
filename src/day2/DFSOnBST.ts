function seach(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) {
    return false;
  }
  if (curr.value === needle) {
    return true;
  }
  if (curr.value < needle) {
    return seach(curr.right, needle);
  }
  return seach(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return seach(head, needle);
}
