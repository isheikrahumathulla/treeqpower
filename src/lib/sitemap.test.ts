/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { createSitemap } from "./sitemap";
import { SITE_URL } from "./site-url";

describe("public sitemap rules", () => {
  test("every page uses the client's ttpower.com origin", () => {
    expect(SITE_URL).toBe("https://ttpower.com");
    const xml = createSitemap(["/contact"], new Set(), new Set());
    expect([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])).toEqual([
      "https://ttpower.com/", "https://ttpower.com/contact", "https://ttpower.com/sitemap",
    ]);
  });
  test("hidden testimonials, retired URLs and search results stay out", () => {
    const xml = createSitemap(["/about-us/testimonials", "/about-us", "/search", "/contact", "/contact"], new Set(["/about-us/testimonials"]), new Set(["/about-us"]));
    expect([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])).toEqual([
      "https://ttpower.com/", "https://ttpower.com/contact", "https://ttpower.com/sitemap",
    ]);
  });
});