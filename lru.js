export class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache =  new Map();
  }

  get(key) {
    const item = this.cache.get(key);

    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }

    return item;
  }

  get oldest() {
    return this.cache.keys().next().value;
  }

  put(key, value) {
    if (this.cache.get(key)) {
      this.cache.delete(key);
    }

    if (this.cache.size === this.capacity) {
      this.cache.delete(this.oldest);
    }

    this.cache.set(key, value);
  }
}