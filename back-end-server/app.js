const Koa = require("koa")
const app = new Koa()
const cors = require("koa2-cors")
const bodyParser = require("koa-bodyparser")
app.use(bodyParser())

// 导入.env的配置项
require("dotenv").config()
// 导入openai服务
// require('./service/openAI')
// require("./service/openapi")

// 导入路由
const router = require("./router/index")

const output_fontClor = require("./app/config")

app.use(async (ctx, next) => {
  // ctx.body = "hello world!"
  ctx.set("Access-Control-Allow-Origin", "*")
  // ctx.set('Access-Control-Allow-Headers','Content-Type,Content-Length,Authorization,Accept,X-Requested-With')
  // ctx.set('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
  await next()
})

// 设置CORS头
app.use(
  cors({
    origin: "http://127.0.0.1:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
)

app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT, () => {
  console.log("   ")
  console.log("network →" + `http://localhost:${process.env.PORT}`)
})
