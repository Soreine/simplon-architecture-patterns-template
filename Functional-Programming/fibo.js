/*
 fibo(0) => 0
 fibo(1) => 1
 fibo(n) => fibo(n - 1) + fibo(n - 2)
*/

function fibo(n) {
  return 0;
}

function tests() {
  const CASES = [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13]
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
