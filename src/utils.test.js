const {
  sum,
  multiply,
  isGreater,
  isLesser,
  maxNum,
  minNum,
  rangeIterator,
  Observable,
} = require("./utils");

test("add two number", () => {
  expect(sum(2, 3)).toBe(5);
});
test("multiply two number", () => {
  expect(multiply(2, 3)).toBe(6);
});
test("biggest number", () => {
  expect(isGreater(2, 3)).toBe(false);
});
test("smaller number", () => {
  expect(isLesser(2, 3)).toBe(true);
});
test("maxNum", () => {
  expect(maxNum(1, 2, 3, 4)).toBe(4);
});
test("minNum", () => {
  expect(minNum(1, 2, 3, 4)).toBe(1);
});
describe("rangeIterator", () => {
  test("when we give step", () => {
    const iterator = rangeIterator(0, 10, 3);
    const result = Array.from(iterator);
    expect(result).toEqual([0, 3, 6, 9]);
  });
  test("when start is greater than end", () => {
    const iterator = rangeIterator(3, 1, 1);
    const result = Array.from(iterator);
    expect(result).toEqual([]);
  });
  test("test negative numbers", () => {
    const iterator = rangeIterator(-1, 1, 1);
    const result = Array.from(iterator);
    expect(result).toEqual([-1, 0, 1]);
  });
});

describe("Observable", () => {
  let observable;
  beforeEach(() => {
    observable = new Observable();
  });
  test(" subscribe & notify ", () => {
    const observer1 = jest.fn();
    const observer2 = jest.fn();
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.notify("done");
    expect(observer1).toHaveBeenCalledWith("done");
    expect(observer2).toHaveBeenCalledWith("done");
  });
  test("unsubscribe ", () => {
    const observer1 = jest.fn();
    const observer2 = jest.fn();
    observable.subscribe(observer1);
    observable.subscribe(observer2);
    observable.unsubscribe(observer1);
    observable.notify("done");
    expect(observer1).not.toHaveBeenCalled();
    expect(observer2).toHaveBeenCalledWith("done");
  });
});