type ScrollTarget = string | null;

let pendingScrollTarget: ScrollTarget = null;

export function setPendingScrollTarget(target: string): void {
  pendingScrollTarget = target;
}

export function consumePendingScrollTarget(): ScrollTarget {
  const target = pendingScrollTarget;
  pendingScrollTarget = null;
  return target;
}
