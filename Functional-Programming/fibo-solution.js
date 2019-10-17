/* eslint-disable no-prototype-builtins */
/*
 fibo(0) => 0
 fibo(1) => 1
 fibo(n) => fibo(n - 1) + fibo(n - 2)

  fibo(2) = fibo(1) + fibo(0) = 1
*/

function memoize(fn) {
  const cache = {};

  return x => {
    if (cache.hasOwnProperty(x)) {
      return cache[x];
    }

    cache[x] = fn(x);
    return cache[x];
  };
}

let fibo = n => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
};
fibo = memoize(fibo);

function tests() {
  const CASES = [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [75, 2111485077978050]
  ];

  CASES.forEach(([n, expected]) => {
    const actual = fibo(n);
    if (actual !== expected) {
      console.log(`Faux: fibo(${n}) a donné ${actual} au lieu de ${expected}`);
    } else {
      console.log(`OK: fibo(${n}) a donné ${expected}`);
    }
  });
}

tests();
