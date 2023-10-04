export const expect = function (val) {
  return {
    toBe(v) {
      if (v === val) {
        return true;
      }

      throw new Error('Not Equal')
    },
    notToBe(v) {
      if (v !== val) {
        return true;
      }

      throw new Error('Equal')
    }
  }
};