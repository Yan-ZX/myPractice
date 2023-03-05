const Koa = require('koa');
const Router = require('koa-router')
const websockify = require('koa-websocket')
const app = websockify(new Koa())
const router = new Router()

app.ws.use((ctx, next) => {
  return next(ctx)
})

router.get('/', async ctx => {
  ctx.body = '欢迎'
})

router.all('/websocket/:id', async ctx => {
  let t = setInterval(function() {
    let n = Math.random()
    if(n > 0.3) {
      let msg = JSON.stringify({ 'id': ctx.params.id, 'n': n })
      ctx.websocket.send(msg)
    }
  }, 1000)
  ctx.websocket.on('message', msg => {
    console.log('前端发过来的数据：', `${ msg }`)
  })
  ctx.websocket.on('close', () => {
    console.log('前端关闭了websocket')
  })
})

app
.ws
.use(router.routes())
.use(router.allowedMethods())

app.use(async ctx => {
  ctx.body = 'Hello yanzx';
});

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000');
});