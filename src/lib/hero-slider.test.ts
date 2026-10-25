/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { advanceSlideClock, HERO_SLIDE_COUNT, HERO_SLIDE_DURATION, manualSlide, nextAutoSlide } from "./hero-slider";

describe("client-approved hero rotation", () => {
  test("three slides rotate at exactly five seconds", () => {
    expect(HERO_SLIDE_COUNT).toBe(3);
    expect(HERO_SLIDE_DURATION).toBe(5000);
    expect(advanceSlideClock(0, 4999, false).advance).toBe(false);
    expect(advanceSlideClock(4999, 1, false).advance).toBe(true);
  });
  test("automatic rotation loops from the third slide to the first", () => {
    expect([nextAutoSlide(0), nextAutoSlide(1), nextAutoSlide(2)]).toEqual([1, 2, 0]);
  });
  test("manual arrows stop at the first and third slides", () => {
    expect(manualSlide(0, -1)).toBe(0);
    expect(manualSlide(0, 1)).toBe(1);
    expect(manualSlide(1, -1)).toBe(0);
    expect(manualSlide(1, 1)).toBe(2);
    expect(manualSlide(2, -1)).toBe(1);
    expect(manualSlide(2, 1)).toBe(2);
  });
  test("pausing preserves time remaining", () => {
    expect(advanceSlideClock(1200, 6000, true)).toEqual({ elapsed: 1200, advance: false });
  });
});