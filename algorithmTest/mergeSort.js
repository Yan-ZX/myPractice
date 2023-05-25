const merge = (left, right) => {
  let temp = new Array();
  while (left.length > 0 && right.length > 0) {
    left[0] < right[0] ? temp.push(left.shift()) : temp.push(right.shift());
  }
  return temp.concat(left, right);
}

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const mid = parseInt(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const arr = [1, 3, 5, 2, 11, 44, 22, 132, 2, 0, 1];
console.log(mergeSort(arr));