# 服务配置

[<<< 返回目录](./start.md) | [<<< 返回配置](./config.md)

这是一个数组，数组项是每一条代理规则。（详见 `/config.example.json` 文件）。

Path：`/config.json` > `[]`

```json
{
  "path": "/bilibili",
  "target": "http://api.bilibili.com",
  "pathRewrite": {
    "/bilibili": "/"
  },
  "headers": {
    "cookie": "此网站需要设置 cookie 来进行身份认证"
  }
}
```

上面是其中的一条规则，与 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) 的 [Options](https://github.com/chimurai/http-proxy-middleware#options) 完全一致，可自行参照其文档。

或者完全按照示例规则照猫画虎。得到的效果是：

> 访问 http://serverIP:8888/bilibili/x/space/myinfo 的请求会被中转到 http://api.bilibili.com/x/space/myinfo

`serverIP` 代指运行服务电脑的 ip，请根据具体情况修改。

一些需要身份认证的网站可能要设置 `cookie`。

这里是访问 bilibili Api 的代理规则，B 站 Api 可参阅 https://github.com/SocialSisterYi/bilibili-API-collect ，很全面，不过大部分都需要 cookie，包括获取粉丝数。

[<<< 返回目录](./start.md) | [<<< 返回配置](./config.md)