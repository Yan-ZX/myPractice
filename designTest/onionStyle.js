function fn1(ctx, next) {
  console.log(ctx, 'fn1执行……');
  next();
  console.log(ctx, 'fn1 ending.');
}

function fn2(ctx, next) {
  console.log(ctx, 'fn2执行……');
  next();
  console.log(ctx, 'fn2 ending.');
}

function fn3(ctx, next) {
  console.log(ctx, 'fn3执行……');
  next();
  console.log(ctx, 'fn3 ending.');
}

function compose(fns) {
  return (ctx) => {
    return dispatch(0);
    function dispatch(i) {
      let fn = fns[i];
      if (!fn) {
        return;
      }
      return fn(ctx, dispatch.bind(null, (i + 1)));
    }
  }
}

let arr = [fn1, fn2, fn3];
let fn = compose(arr);
fn({word:'haha'})