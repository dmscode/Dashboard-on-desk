安装
===

[<<< 返回目录](./start.md)

## 下载

你可以直接下载 zip 文件，在 [Dashboard-on-desk](https://github.com/dmscode/Dashboard-on-desk) 项目的右上那个绿色 `Code` 按钮中。

也可以使用 git clone 此项目：

```bash
# 克隆项目
git clone git@github.com:dmscode/Dashboard-on-desk.git
```

## 配置

项目中有两个配置文件：

```
/config.example.json ------ 服务配置
/Public/config.example.json ------ 组件配置
```

你需要手动将文件名中的 `example.` 去掉。然后根据需求修改配置。参见：[配置](./config.md)

## 启动

### Simple

用任何你喜欢的方式开启一个 Web 服务器，把项目中的 Public 目录设置为根目录即可。

### Advanced

首先你需要在电脑上安装 [Node.js](https://nodejs.org/) ![Node-lts >= 16.16.0](https://img.shields.io/node/v-lts/http-proxy-middleware?style=flat-square)。

然后安装必要的依赖：

```bash
# 安装必要依赖
npm install
# or use Yarn
yarn install
```

每次使用只需用此命令启动：

```bash
# 启动
npm run start
# or use Yarn
yarn start
```

然后打开 `https://你电脑的IP:8888/` 访问即可。

## 区别

第二种方式启动了一个服务器，负责代理一些网络请求，这样网页就可以请求到网络数据，比如获取未读消息，粉丝数量等。

第一种因为没有服务来代理这些网络请求，自然不能使用相关的组件，但是展示时间日期什么的完全不成问题。

## 技巧

- 如果不需要代理网络请求，完全可以在打开页面之后关闭服务；

- 将页面固定（安装）到桌面，然后从快捷方式打开就是全屏显示了（没有地址栏），我在旧的 iPad 上就是用这种方式全屏显示的；

- 你可以尝试用各种设备来启动这个服务，然后挂机，比如旧手机等。当然 Nas 或者 VPS 等也完全可以。并且前后端可以完全分离。

[<<< 返回目录](./start.md) | [配置](./config.md)