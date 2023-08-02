const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function walk(
  maze: string[],
  curr: Point,
  wall: string,
  end: Point,
  path: Point[],
  seen: boolean[][],
): boolean {
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  if (curr.y === end.y && curr.x === end.x) {
    path.push(end);
    return true;
  }

  if (seen[curr.y][curr.x]) {
    return false;
  }

  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, { x: curr.x + x, y: curr.y + y }, wall, end, path, seen)) {
      return true;
    }
  }

  path.pop();
  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const path = [] as Point[];
  const seen = [] as boolean[][];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  walk(maze, start, wall, end, path, seen);
  return path;
}
