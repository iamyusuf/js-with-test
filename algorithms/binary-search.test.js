import { binarySearch } from "./binary-search";
import { test, expect } from "vitest";

test('It should test binary search algorithms', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(binarySearch(arr, 5)).toBe(4);
  expect(binarySearch(arr, 4)).toBe(3);
  expect(binarySearch(arr, 1)).toBe(0);
  expect(binarySearch(arr, 7)).toBe(-1);
})