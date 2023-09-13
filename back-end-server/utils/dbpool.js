const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    port:3306,
    database:'chatgptusm',
    user:'root',
    password:'123456',
    connectionLimit:10
})

//直接使用含回调的即可
function queryback(sql){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){
                
                reject(err)
            }else{
            //事件驱动回调
            connection.query(sql,(err,data)=>{
                
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            });
            //释放连接
            connection.release();
        }
        })
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports = queryback