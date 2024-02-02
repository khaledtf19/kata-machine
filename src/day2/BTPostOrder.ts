export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk([], head);
}

function walk(path: number[], node: BinaryNode<number>): number[] {
  if (node.left) {
    walk(path, node.left);
  }
  if (node.right) {
    walk(path, node.right);
  }

  path.push(node.value);
  return path;
}
