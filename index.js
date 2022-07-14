const express = require('express');
const fs = require('fs');
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware');
//设置跨域访问
app.all("*", function (req, res, next) {
  delete req.headers.origin
  delete req.headers.referer

  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") res.send(200);
  //让options尝试请求快速结束
  else next();
});
const workingDir = process.cwd()+'/';  // 当前工作目录
const options = {
    changeOrigin: true,
    ws: true,
    secure: true,
    followRedirects: true,
    prependPath: false,
    logger: console,
    onError: (err, req, res) => {
      console.log(err)
    },
};
const config = JSON.parse(fs.readFileSync(workingDir+'config.json'))
for(const item of config){
    app.use(item.path, createProxyMiddleware(Object.assign({}, options, item)));
}
app.use(express.static(__dirname + '/Public'))
app.get('*', (req,res) =>{
  res.sendFile(__dirname+'/Public/index.html');
});

app.listen(8888, '0.0.0.0', ()=>{
    console.log("server running at http://localhost:8888'")
})