function test(arr) {
  let len = arr.length;
  let res = new Array(len);
  for (let i = 0; i < len; i++) {
    let sm = arr[i];
    for (let j = i + 1; j < len; j++) {
      if (arr[j].length < sm.length) {
        sm = arr[j]
        console.log('111');
      }
    }
    res[i] = sm;
  }
  return res;
}

// let tt = ['last', 'day', 'of', 'the', 'school', 'year'];
let tt = ['first', 'day', 'of', 'spring'];
console.log(test(tt));