export default function pre_order_search(head: BinaryNode<number>): number[] {
  const arr: number[] = [];
  search(arr, head);
  return arr;
}

function search(arr: number[], curr: BinaryNode<number>) {
  arr.push(curr.value);

  if (curr.left) {
    search(arr, curr.left);
  }
  if (curr.right) {
    search(arr, curr.right);
  }
}
