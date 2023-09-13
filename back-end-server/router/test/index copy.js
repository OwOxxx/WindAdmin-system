const generate = require("../../service/openapi.js")
const fs = require("fs")
const { Readable, Writable } = require("readable-stream")

const decoder = new TextDecoder("utf-8")
const encoder = new TextEncoder()

function test(router) {
  router.post("/test", async (ctx, next) => {
    // 获取请求参数
    const { messages } = ctx.request.body
    const res = generate(messages).then(res => {
      console.log(res)
    })
    ctx.type = res.headers.get("Content-Type") || "application/octet-stream" // 设置响应头的 Content-Type
    ctx.status = res.status // 设置响应的状态码
    ctx.body = res.body
    // const text = "hello world"
    // 创建可读流
    // try {
    //   const readableStream = new Readable({
    //     read() {
    //       // 从数据源读取数据，并通过push方法将数据推送给流
    //       this.push(text)
    //       this.push(null)
    //     },
    //   })
    //   ctx.type = "text/plain"
    //   console.log(readableStream)
    //   ctx.body = readableStream
    // } catch (error) {
    //   console.log(error)
    // }
    // if (res.status === 200) {
    // 创建可读流
    // const readableStream = new Readable({
    //   read() {
    //     // 从数据源读取数据，并通过push方法将数据推送给流
    //     this.push(res.body)
    //   },
    // })
    // 创建可写流
    // const writableStream = new Writable({
    //   write(chunk, encoding, callback) {
    //     // 将数据写入目标
    //     console.log(chunk)
    //     callback()
    //   },
    // })
    // read.pipeTo(writableStream)
    // } else {
    // ctx.body = {
    //   error: {
    //     code: res.status,
    //     message: res.statusText,
    //   },
    // }
    // }
  })
}

module.exports = test
