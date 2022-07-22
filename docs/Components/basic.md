# 基础组件

[<<< 返回目录](../start.md) | [<<< 返回组件列表](../components.md)

## 布局卡片

不设置组件表示（`name`），就不调用任何组件，只显示一个卡片，通过调整卡片配置获得各种效果，比如划定一个范围等。可以利用卡片类型（`cardType`）来显示横线、竖线，用作分隔。

## 标题

显示一个标题

- **name**：`Title`
- **align**：对齐方式，或者说文字定位。默认为 `flex-pos-4`，即文字靠左，垂直居中。最后的数字可以视为九宫格中的位置（参见下方九宫格）
- **content**：显示的内容（文字）

**附：九宫格**

|     | 左          | 中          | 右          |
| --- | ---------- | ---------- | --------- |
| 上   | flex-box-1 | flex-box-2 | flex-box-3 |
| 中   | flex-box-4 | flex-box-5 | flex-box-6 |
| 下   | flex-box-7 | flex-box-8 | flex-box-9 |

## 导航

导航（链接）

- **标识（name）**：`Nav`
- **align**：`left|center|right` 文字对齐方向
- **path**：链接路径，一般为组件/面板标识（优先级高于 `href`）
- **href**：链接地址，用于对外链接，会在新窗口中打开
- **title**：显示文字
- **image**：显示图片，会尽可能大的显示（优先级高于 `title`）


[<<< 返回目录](../start.md) | [<<< 返回组件列表](../components.md)