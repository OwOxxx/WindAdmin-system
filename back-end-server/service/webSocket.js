const WebSocket = require('ws');

// 创建 WebSocket 服务器
const wss = new WebSocket.Server({ port: 8080 });

// 当有新的连接时触发该事件
wss.on('connection', (ws) => {
  console.log('Client connected');

  // 当收到消息时触发该事件
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);

    // 将消息发送回客户端
    ws.send(`You sent => ${message}`);
  });

  // 当连接断开时触发该事件
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

module.exports = wss;
