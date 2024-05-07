function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function isGreater(a, b) {
  return a > b;
}
function isLesser(a, b) {
  return a < b;
}
function maxNum() {
  return Math.max(...arguments);
}
function minNum() {
  return Math.min(...arguments);
}
function rangeIterator(start, end, step) {
  let start2;
  return {
    next() {
      if (start <= end) {
        start2 = start;
        start += step;
        return { value: start2, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

class Observable {
  observers = [];
  constructor() {}

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
module.exports = {
  sum,
  multiply,
  isGreater,
  isLesser,
  maxNum,
  minNum,
  rangeIterator,
  Observable,
};

