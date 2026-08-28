import { describe, expect, it } from "vitest";
import { history, sources } from "./Home";

describe("Ford editorial history", () => {
  it("keeps the complete journey from the Quadricycle to the next Le Mans chapter", () => {
    expect(history[0]).toMatchObject({ year: "1896", title: "Quadriciclo" });
    expect(history.some((item) => item.year === "1908" && item.title === "Model T")).toBe(true);
    expect(history.some((item) => item.year === "1913" && item.title === "Linha móvel")).toBe(true);
    expect(history.some((item) => item.year === "1966" && item.title === "1–2–3")).toBe(true);
    expect(history.some((item) => item.year === "2016" && item.title === "Ford GT")).toBe(true);
    expect(history.at(-1)).toMatchObject({ year: "2027", title: "Hypercar" });
  });

  it("links the timeline to the official Ford and Le Mans references", () => {
    expect(sources.length).toBeGreaterThanOrEqual(5);
    expect(sources.some(([, , url]) => url.includes("24h-lemans.com"))).toBe(true);
    expect(sources.filter(([, , url]) => url.includes("corporate.ford.com")).length).toBeGreaterThanOrEqual(3);
  });
});
