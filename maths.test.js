import { sum, subtract } from "./maths";
import { test, expect } from "vitest";

test('It should test sum function', () => {
    expect(sum(10, 10)).toBe(20);
    expect(sum(10, 10.5)).toBe(20.5);
})

test('It should test subtract functino', () => {
    expect(subtract(10, 5)).toBe(5);
    expect(subtract(5, 10)).toBe(-5);
})