const Koa = require("koa");
const mysql = require("koa-mysql");

let db = mysql.createPool({host:"localhost",user:"root",password:"123456",database:"node"});

let server = new Koa();

server.use(function *(){
  let reponse = yield db.query(`select * from usertable`);

  this.body = reponse;
})

server.listen(8088);

console.log('Server running at 8088')