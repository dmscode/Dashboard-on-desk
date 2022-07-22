# 通知数据

[<<< 返回目录](../start.md) | [<<< 返回组件列表](../components.md)

底层获取 JSON 数据的方法相同，为了避免一些错误导致频繁请求，会有一分钟的数据缓存。仅在内存中缓存，刷新页面清除所有缓存。

为避免多组件更新间隔相同导致的请求集中，所以会随机添加 ±5 秒内的偏移时间。

## 简单 JSON 数据展示

简单的 JSON API 数据读取展示。用以获取其中某个指定数据并展示出来。比如粉丝数等。可以搭配 `cardBackground` 属性等，为不同数据设定不同的展示样式。

数据获取涉及跨域，所以需要后台服务中转，参见上面服务配置。如需身份验证，cookie 也在服务配置中进行设置。

- **name**：`EasyJson`
- **interval**: 更新频率，单位毫秒（ms），设置为 0 则不自动更新
- **href**：API 地址，注意：返回的数据格式必须是 JSON
- **path**：要显示的数据在 JSON 中的路径
- **color**：文字颜色
- **onTrue**：（Boolean）当数据为真时添加 `info` 状态，用以突出显示不为 0 的消息数，默认为 `false`
- **trueBackground**：当数据为真时的背景，需先开启上一项

## Slowly 通知数

[Slowly](https://slowly.app/) 寄送中的邮件数量和未读邮件数量。两个数值，前一个是寄送中，后一个是已寄达但尚未阅读的数量。如果两者都为 0，则显示 `SLOWLY`。如果 `token` 失效，两者都显示 401。

- **name**：`SlowlyNotic`
- **interval**: 更新频率，单位毫秒（ms），设置为 0 则不自动更新
- **incomingHref**：寄送中 API 地址（`https://api.getslowly.com/letter/incoming/check?token=`），涉及跨域，需后台服务支持，并对应改写此地址
- **unreadingHref**：未读邮件 API 地址（`hhttps://api.getslowly.com/letter/incoming/check?token=`），涉及跨域，需后台服务支持，并对应改写此地址
- **token**：身份识别，打开开发者工具，在网络请求里获取，获取一次能用十天半个月的，不算很烦人。
- **color**：文字颜色
- **trueBackground**：有新邮件时的背景颜色

## 小众论坛（Discourse）未读消息数

Discourse 论坛的未读消息数，各种设置同 EasyJson。不过内部对数据做了一点细节处理。API 地址为：`https://论坛地址/notifications.json`。同样的，涉及跨域和身份验证（cookie），需后台服务支持，并对应改写此地址

- **name**：`MetaNotic`

## 爱发电“投喂”数

基本设置同 EasyJson，详细 API 查看爱发电——作者——开发者页面。使用不同的 `path` 设定可以读取不同的数据，不过目前只支持单一数据的展示。

- **name**：`AfdianNotic`
- **user_id**：在开发者页面中获取
- **token**：在开发者页面中获取

[<<< 返回目录](../start.md) | [<<< 返回组件列表](../components.md)