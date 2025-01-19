function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function sumArrays(arr1, arr2) {
  return Array.from(
    { length: Math.max(arr1.length, arr2.length) },
    (_, i) => (arr1[i] || 0) + (arr2[i] || 0)
  );
}

function findElement(arr, value) {
  return arr.indexOf(value);
}

function findAllOccurrences(arr, item) {
  return arr.filter((x) => x === item).length;
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

function getAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return Math.round((sum / arr.length) * 100) / 100;
}

function isSameLength(arr) {
  return arr.every((str) => str.length === arr[0].length);
}

function isValueEqualsIndex(arr) {
  return arr.some((value, index) => value === index);
}

function insertItem(arr, item, index) {
  return [...arr.slice(0, index), item, ...arr.slice(index)];
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

function doubleArray(arr) {
  return [...arr, ...arr];
}

function toStringList(arr) {
  return arr.join(',');
}

function distinct(arr) {
  return [...new Set(arr)];
}

function createNDimensionalArray(n, size) {
  if (n === 1) return Array(size).fill(0);
  return Array(size).fill(createNDimensionalArray(n - 1, size));
}

function flattenArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function calculateBalance(arr) {
  return arr.reduce(
    (balance, [income, expense]) => balance + (income - expense),
    0
  );
}

function createChunks(arr, chunkSize) {
  return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
    arr.slice(i * chunkSize, (i + 1) * chunkSize)
  );
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

function getElementByIndices(arr, indices) {
  return indices.reduce((acc, index) => acc[index], arr);
}

function getFalsyValuesCount(arr) {
  return arr.filter((x) => !x).length;
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (__, j) => (i === j ? 1 : 0))
  );
}

function getIndicesOfOddNumbers(numbers) {
  return numbers
    .map((num, index) => (num % 2 !== 0 ? index : -1))
    .filter((index) => index !== -1);
}

function getHexRGBValues(arr) {
  return arr.map(
    (num) => `#${num.toString(16).padStart(6, '0').toUpperCase()}`
  );
}

function getMaxItems(arr, n) {
  return [...arr].sort((a, b) => b - a).slice(0, n);
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
};
