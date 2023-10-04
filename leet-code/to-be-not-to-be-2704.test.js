import { expect as expects } from "./to-be-not-to-be-2704";
import { expect, test } from "vitest";

test('It should test user defined expects', () => {
  expect(expects(5 + 5).toBe(10)).toBe(true);
  expect(() => expects(5 + 6).toBe(10)).toThrow(Error);
  expect(expects(5 + 5).notToBe(11)).toBe(true);
  expect(() => expects(5 === 5).notToBe(true)).toThrow(Error);
})