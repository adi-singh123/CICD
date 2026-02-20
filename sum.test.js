import sum from "./sum.js";

test("add 2 + 2 equal to 4", () => {
  expect(sum(2, 2)).toBe(4);
});