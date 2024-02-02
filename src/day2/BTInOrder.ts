export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk([], head);
}

function walk(path: number[], node: BinaryNode<number>): number[] {
  if (node.left) {
    walk(path, node.left);
  }
  path.push(node.value);
  if (node.right) {
    walk(path, node.right);
  }
  return path;
}
