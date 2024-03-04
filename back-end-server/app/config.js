const config = {
  output_fontClor: {
    bright: "\x1B[1m", // 亮色
    grey: "\x1B[2m", // 灰色
    italic: "\x1B[3m", // 斜体
    underline: "\x1B[4m", // 下划线
    reverse: "\x1B[7m", // 反向
    hidden: "\x1B[8m", // 隐藏
    black: "\x1B[30m", // 黑色
    red: "\x1B[31m", // 红色
    green: "\x1B[32m", // 绿色
    yellow: "\x1B[33m", // 黄色
    blue: "\x1B[34m", // 蓝色
    magenta: "\x1B[35m", // 品红
    cyan: "\x1B[36m", // 青色
    white: "\x1B[37m", // 白色
    blackBG: "\x1B[40m", // 背景色为黑色
    redBG: "\x1B[41m", // 背景色为红色
    greenBG: "\x1B[42m", // 背景色为绿色
    yellowBG: "\x1B[43m", // 背景色为黄色
    blueBG: "\x1B[44m", // 背景色为蓝色
    magentaBG: "\x1B[45m", // 背景色为品红
    cyanBG: "\x1B[46m", // 背景色为青色
    whiteBG: "\x1B[47m", // 背景色为白色
  },
  // 常用的状态码
  statusCode: {
    200: "OK",
    201: "Created",
    202: "Accepted",
    204: "No Content",
    301: "Moved Permanently",
    302: "Moved Temporarily",
    304: "Not Modified",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    410: "Gone",
    500: "Internal Server Error",
    501: "Not Implemented",
    503: "Service Unavailable",
  },
}

module.exports = config
