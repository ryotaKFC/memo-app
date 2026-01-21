import { expect, it } from "vitest";
import { formatDate } from "./formatDate";

it("2025-01-01 00:00 が表示されること", () => {
  expect(formatDate(new Date("2025-01-01T00:00:00"))).toBe("2025-01-01 00:00");
});
