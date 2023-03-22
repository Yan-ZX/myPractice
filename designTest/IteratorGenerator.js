// 迭代器模式
function iteratorGenerator(list) {
  let idx = 0;
  const len = list.length;
  return {
    next: () => {
      let done = idx >= len;
      let value = !done ? list[idx++] : undefined;
      return {
        done,
        value
      }
    }
  }
}

var iterator = iteratorGenerator(['1号选手', '2号选手', '3号选手', '4号选手', '5号选手']);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
