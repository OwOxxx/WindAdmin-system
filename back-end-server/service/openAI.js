const https = require('https');
const http = require('http');

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//     });

// const openai = new OpenAIApi(configuration);

// const runPromt = async () =>{
//   const prompt = `tell me who are u?`

//   const response = await openai.createCompletion({
//       // model: "text-davinci-003",
//       model: "gpt-3.5-turbo",
//       prompt: prompt,
//       max_tokens: 7,
//       temperature: 0,
//       top_p: 1,
//       n: 1,
//       stream: false,
//       logprobs: null,
//       stop: "\n"
//   })
//   console.log('request');
//   console.log(response.data.choices[0]);
// }
// runPromt();
// 定义 POST 请求参数
const postData = JSON.stringify({
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "Say this is a test!"}],
  "temperature": 0.7
});
console.log(postData)

const proxy = 'http://127.0.0.1:7890'; // 你的代理VPN服务器地址和端口号
// const proxy = 'https://api.openai.com/v1/chat/completions';

// const httpProxy = require('http-proxy');

// const proxy = httpProxy.createProxyServer({});

// http.createServer(function(req, res) {
//   // 将请求转发到 http://www.google.com 
//   proxy.web(req, res, { target: 'http://www.google.com' });
// }).listen(8000);

// 定义 POST 请求选项
const options = {
  hostname: 'api.openai.com',
  port: 443,
  path: '/v1/chat/completions',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, 
    'Content-Type': 'application/json',
    'Content-Length': postData.length
  },
  agent: new https.Agent({ 
    proxy: proxy,
    timeout: 10000
  })
};

// 发送 POST 请求
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (data) => {
    console.log(data.toString());
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(postData);
req.end();