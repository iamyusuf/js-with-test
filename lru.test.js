import { LRU } from "./lru";
import { test, expect } from "vitest";


test('Testing of LRU cache', () => {
  const lru = new LRU(3);

  lru.put('a', 1);
  lru.put('b', 2);
  lru.put('c', 3);

  expect(lru.capacity).toBe(3);
  expect(lru.get('a')).toBe(1);
  lru.put('d', 4);
  expect(lru.get('d')).toBe(4);
  expect(lru.oldest).toBe('c');
  expect(lru.get('a')).toBe(1);

})