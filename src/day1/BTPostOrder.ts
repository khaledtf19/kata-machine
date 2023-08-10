export default function post_order_search(head: BinaryNode<number>): number[] {
  const arr: number[] = [];
  search(arr, head);
  return arr;
}
function search(arr: number[], curr: BinaryNode<number>) {
  if (curr.left) {
    search(arr, curr.left);
  }
  if (curr.right) {
    search(arr, curr.right);
  }
  arr.push(curr.value);
  return;
}
