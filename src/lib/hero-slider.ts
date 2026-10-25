export const HERO_SLIDE_DURATION = 5000;
export const HERO_SLIDE_COUNT = 3;

export function nextAutoSlide(index: number) {
  return (index + 1) % HERO_SLIDE_COUNT;
}

export function manualSlide(index: number, direction: -1 | 1) {
  return Math.max(0, Math.min(HERO_SLIDE_COUNT - 1, index + direction));
}

export function advanceSlideClock(elapsed: number, delta: number, paused: boolean) {
  const total = elapsed + (paused ? 0 : delta);
  return { elapsed: total >= HERO_SLIDE_DURATION ? 0 : total, advance: total >= HERO_SLIDE_DURATION };
}