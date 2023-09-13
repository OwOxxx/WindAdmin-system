var Router = require("koa-router")
var router = new Router()

// 路由路径前缀设置
router.prefix("/chat-server")

// 引入路由模块
require("./user/register.js")(router)
require("./user/login.js")(router)

//测试路由
require("./test/index.js")(router)

// 导出路由
module.exports = router
