const generate = require("../../service/openapi.js")
const fs = require("fs")
const { Readable, Writable } = require("readable-stream")
const { pipeline } = require("stream")

const decoder = new TextDecoder("utf-8")
const encoder = new TextEncoder()

function test(router) {
  router.post("/test", async (ctx, next) => {
    const { messages } = ctx.request.body
    const response = await generate(messages)
    ctx.type = response.headers.get("Content-Type") || "application/octet-stream" // 设置响应头的 Content-Type
    ctx.status = response.status // 设置响应的状态码
    if (ctx.status === 200) {
      const reader = response.body.getReader()

      function read() {
        reader.read().then(({ done, value }) => {
          if (done) {
            // 事件流数据接收完毕
            console.log("Stream ended")
            return
          }

          // 处理接收到的事件流数据
          console.log(value.toString())

          // 继续读取下一块数据
          read()
        })
      }

      // 开始读取数据
      read()
    } else {
      ctx.body = {
        error: {
          code: response.status,
          message: response.statusText,
        },
      }
    }
  })
}

// 创建一个返回文本流的函数
function createTextStream() {
  const text = "多发发请问多发发请问多发发请问多发发请问多发发请问多发发请问多发发请问多发发请问多发发请问多发发请问多发发请问"

  // 创建一个可读流
  const textStream = new Readable({
    read() {},
  })

  // 在流中写入文本
  for (let i = 0; i < 10; i++) {
    textStream.push(text)
  }
  textStream.push(null) // 表示流的结束

  return textStream
}

module.exports = test
