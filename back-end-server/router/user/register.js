const queryback = require("../../utils/dbpool.js")

function register(router) {
  router.post("/register", async ctx => {
    const data = ctx.request.body
    console.log(data)
    let user = await queryback(`INSERT INTO user (username, password) VALUES ('${data.username}', '${data.password}')`)
    if (user) {
      ctx.body = {
        code: 1,
        msg: "注册成功",
      }
    }
  })
}

module.exports = register
