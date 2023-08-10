export default function in_order_search(head: BinaryNode<number>): number[] {
  const arr: number[] = [];
  search(arr, head);
  return arr;
}

function search(arr: number[], curr: BinaryNode<number>) {
  if (curr.left) {
    search(arr, curr.left);
  }
  arr.push(curr.value);
  if (curr.right) {
    search(arr, curr.right);
  }
}
