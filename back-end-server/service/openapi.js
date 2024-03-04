const { ProxyAgent, fetch } = require("undici")

const httpsProxy = process.env.HTTPS_PROXY
const baseUrl = (process.env.OPENAI_API_BASE_URL || "https://api.openai.com").trim().replace(/\/$/, "")
const apiKey = process.env.OPENAI_API_KEY

const model = "gpt-3.5-turbo"

function generate(messages) {
  // const messages = [
  //   {
  //     role: "user",
  //     content: "Say this is a test!",
  //   },
  // ]

  const initOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    method: "POST",
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.6,
      stream: true,
    }),
  }

  initOptions.dispatcher = new ProxyAgent(httpsProxy)

  return fetch(`${baseUrl}/v1/chat/completions`, initOptions).catch(err => {
    console.error(err)
  })
}

module.exports = generate
