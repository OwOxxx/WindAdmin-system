const queryback = require("../../utils/dbpool.js")

function login(router) {
  // sql语句
  router.post("/login", async ctx => {
    const data = ctx.request.body
    console.log(data)
    let user = await queryback(`select username from user where username = '${data.username}'`)
    console.log(user)
    if (!user || user.length === 0) {
      //用户名不存在
      //返回时必须返回status,status状态码可与前端element-ui中的form表单一起使用，可以判断
      ctx.body = {
        code: -1,
        msg: "该账号不存在",
      }
    } else {
      // 把加密过后的密码以及用户名 和 数据库的数据  匹配
      let result = await queryback(`select * from user where username = '${data.username}' and password = '${data.password}'`)
      console.log(result)
      if (!result || result.length === 0) {
        ctx.response.status = 200
        ctx.body = {
          code: -1,
          msg: "账号或密码不正确",
        }
      } else {
        // 如果该结果存在说明登录成功，则生成token
        // let token = jwt.sign({
        //     myusername
        // }, PRIVATE_KEY, {
        //     expiresIn: EXPIRESD
        // })

        ctx.response.status = 200
        ctx.body = {
          code: 1,
          msg: "登录成功",
          token: "4564564564",
        }
      }
    }
  })
}

module.exports = login
