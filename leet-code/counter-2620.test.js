import { createCounter } from "./counter-2620";
import { test, expect } from "vitest";

test('Test createCounter closuer!', () => {
  const counter = createCounter();
  expect(counter()).toBe(1);
  expect(counter()).toBe(2);
  expect(counter()).toBe(3);
  expect(counter()).toBe(4);
})