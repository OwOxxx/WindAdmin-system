const generate = require("../../service/openapi.js")
const fs = require("fs")
const { Readable, Writable } = require("readable-stream")
const { pipeline } = require("stream")

const decoder = new TextDecoder("utf-8")
const encoder = new TextEncoder()

function test(router) {
  const { Transform } = require("stream")

  router.post("/test", async (ctx, next) => {
    const { messages } = ctx.request.body
    const response = await generate(messages)
    ctx.type = response.headers.get("Content-Type") || "application/octet-stream" // 设置响应头的 Content-Type
    ctx.set("Cache-Control", "no-cache")
    ctx.status = response.status // 设置响应的状态码
    if (ctx.status === 200) {
      const stream = response.body

      const transformStream = new Transform({
        transform(chunk, encoding, callback) {
          // 对每次读取到的数据进行处理
          const data = chunk.toString()
          // 将字符串按行分割
          const lines = data.split("\n")
          console.log(lines)
          // 遍历每行数据
          for (const line of lines) {
            if (line.startsWith("data:")) {
              // 提取JSON字符串部分
              const jsonString = line.substring(line.indexOf("{"))

              try {
                // 解析JSON字符串为对象
                const jsonObject = JSON.parse(jsonString)

                // 处理每个JSON对象
                const data = jsonObject.choices[0].delta?.content || ""
                console.log(jsonObject.choices[0])
                this.push(data)
              } catch (error) {
                console.error("Invalid JSON:", jsonString)
              }
            }
          }

          // 将处理后的数据写入到新的可写流中
          callback()
        },
      })

      await new Promise((resolve, reject) => {
        pipeline(stream, transformStream, ctx.res, error => {
          if (error) {
            reject(error)
          } else {
            resolve()
          }
        })
      })
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
