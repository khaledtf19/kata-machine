export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk([], head);
}

function walk(path: number[], node: BinaryNode<number>): number[] {
  path.push(node.value);
  if (node.left) {
    walk(path, node.left);
  }
  if (node.right) {
    walk(path, node.right);
  }

  return path;
}
