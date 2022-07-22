# 前端配置

[<<< 返回目录](./start.md) | [<<< 返回配置](./config.md)

先给出第一层结构，然后再逐步解读。

Path：`/publish/config.json`

```json
{
  "global": {},
  "colors":{},
  "tools": {},
  "panels": {}
}
```

## 名词解释

- 组件、小组件、小挂件、小工具……：就是每一个小的功能模块，在配置中用 `tools` 表达相关设定；
- 独立组件、独立组件页面：把某个小组件以单独页面的形式显示；
- 组件标识：小组件的内部名称；
- 面板：可以放入多个小组件的页面，在配置中用 `panels` 表达相关设定；
- 网格：面板中划分均匀的网格，然后小组件根据设定占用相应的位置
- 卡片：在面板中，每个小组件会放入一个叫做卡片的容器内，然后容器放入网格中对应的位置

## 全局配置

Path：`/publish/config.json` > `global`

### `interval`（必须）（Number）

全局配置文件读取间隔。每间隔指定时间，网页会重新读取此配置文件（`/publish/config.json`）。配置文件发生更改之后会自动更新到页面。这样对于一些不太方便操作的设备，比如反应迟钝的平板电脑，在配置过程中就不需要每次手动刷新了。

单位：毫秒（ms），`6e5` 是科学计数法，相当于`600,000`，即 600 秒。

可以在编辑配置文件时将此值调小，比如：`1e4`（10 秒），这样就可以比较实时的观察到更改的效果了。

如果设置为 0 则表示不自动更新。从 0 修改为其他数字需要刷新页面才能生效。因为不自动更新配置时页面无法发现配置文件的变化。

其他位置的 `interval` 也都代表更新间隔，设置方法均相同。

### `gridSize`（Number）

面板中的组件是基于网格（Grid）进行排版的，这个值是单位网格的宽高（宽高相等）。

### `gap`（Number）

网格的间距，主要表现在组件之间的间隔。

通过调节 `gridSize` 和 `gap` 的值可以变相达到整体缩放的目的。

### `theme`（"light" | "dark" | "auto"）

浅色模式、深色模式、自动切换（默认）。

### `themeToggleTime`（Array）

如果主题设置为自动切换，这里定义的是自动切换的时间，第一个是早晨从深色切换到浅色的时间，第二个是从浅色切换到深色的时间。

默认值：`[6, 20]`

可以用小数表示更精确的时间。

## 全局默认配置

Path：`/publish/config.json` > `global`

这些配置项也可以出现在其他某些位置，然后按照一定的规则相互覆盖。写在 `global` 中即为全局默认，有效范围最广，但是优先级最低。

### `cardType`（String）

组件卡片样式，注意，**仅面板中的组件才具有卡片容器**。

  - `normal`（默认）基本卡片样式
  - `noStyle` 无样式
  - `justBorder` 只有边框
  - `borderBlur` 边框+背景模糊
  - `verticalLine` 纵向分割线（仅用于布局，不可关联组件）
  - `horizontalLine` 横向分割线（仅用于布局，不可关联组件）

### `cardBackground"`（String）

卡片背景，此设定会作为卡片的 `background` 属性使用，所以灵活度非常高，颜色，渐变，图片……都可以

### `cardBlur`（Number）

背景模糊程度，如果卡片背景具有透明度，那么底层内容会被模糊，以便内容显示不被影响，默认为 8，一般情况下都是够用的

### `cardBorder"`（String）

卡片边框设定，会被直接作为 `border` 属性使用

### `cardRadius`（Number）

卡片圆角

### `navWidth`（Number）

导航项的宽度，此设定仅对导航面板有效，这里的宽度是指跨越的网格数。

### `navHeight`（Number）

导航项的高度。

### `sources`（必须）（Object）

用来指定随机图片的来源，如果使用随机图片组件，则此项必须。

```json
"sources": {
  "unsplash": "https://source.unsplash.com/random/{width}x{height}.{spam}",
  "unsplashProxy": "http://serverIP:8888/unsplash/random/{width}x{height}.{spam}",
  "xjh": "https://img.xjh.me/random_img.php?return=302&type=bg&spam={spam}",
  "ixwgq": "https://api.ixiaowai.cn/gqapi/gqapi.php?spam={spam}"
}
```

其中的属性名作为调用依据，后面的地址中可以包含三个参数：`{width}`、`{height}`、`{spam}`。宽高为组件实际尺寸，`spam` 为一个时间戳，用来避免缓存影响。三个参数均非必须，根据实际情况自行选用。你可以按照规则自行设定随机图片来源，网络中有很多随机壁纸的 API。

unsplash 的随机图片数量大，质量高，非常推荐使用。不过可能遇到访问困难，加载过慢的问题。如果是在平板电脑等设备上显示，又可能不太方便施展魔法。所以可以用本工具的后端服务代理请求（如第二条所示，同时在服务配置中要添加对应的条目）。

一般代理地址使用相对地址即可，只有前后端不同源的时候才需要使用绝对地址。

## 全局色彩设定

Path：`/publish/config.json` > `color`

用于设定页面颜色变量，供组件调用。

```json
"light": {
  "color-1": "red"
},
"dark": {
  "color-1": "yellow"
}
```

这样就定义了 `color-1` 在浅色模式和深色模式下的值。在后面可以这样调用：

```json
"color": "var(--color-1)"
```

此处便会在亮色模式下显示为红色，而在暗色模式下显示为黄色。

技术上，可以自定义新的颜色，也可以覆盖系统的颜色。`light` 对象的设定会被写入 `:root`，其他对象则写入名字所对应的类中。

## 工具默认设定

Path：`/publish/config.json` > `tools`

内部是每个工具的默认设定，具体参照[组件列表](./components.md)。

只有出现在此处的组件才会被列入导航页面。而独立组件页面则会直接使用此处的配置。

```json
"tools": {
  "NumClock": {
    "title": "数字时钟",
    "seconds": true,
    "ink": true
  },
  "VerticalClock": {
    "title": "纵向时钟",
    "ink": true
  }
}
```

这里的 `NumClock`、`VerticalClock` 为组件表示，表明后面的设定是针对哪个组件的。组件的标识和组件可以有哪些设定都可以查阅[组件列表](./components.md)

`title` 是这个组件在导航中的显示名称，可以自己随意命名。如果不做设定，则会显示组件标识。

## 面板

Path：`/publish/config.json` > `panels`

```json
"panels": {
  "index": {
    "title": "首页",
    "cardType": "normal",
    "navWidth": "20",
    "navHeight": "6",
    "tools": []
  },
}
```

`index` 为面板标识，这个可以随意写的，会作为面板的网址。`index` 为首页。

如果没有设定 `index` 面板，则首页会作为导航页面，如果面板中的 `tools` 没有设定，或者为空，也会被显示为导航面板。

`title` 同样是用来显示在导航中的名称。

此处的设定会覆盖 `global` 中的设定（仅限当前面板之内）。

### 面板中的工具

Path：`/publish/config.json` > `panels` > `panelName` > `tools`

这是一个数组，列出面板中的所有组件。**数组中的顺序即组件间的层叠顺序，如果组件位置重叠，后面的组件会覆盖前面的组件**。利用这个特性可以做出很多有趣的效果。

对于其中的每一项，有如下通用设定：

#### `name`（String）

组件的标识，说明这里调用了哪个组件。如果没有 `name`，则只显示一个卡片（容器），用来进行各种布局操作。

### `pos`（必须）（Object）

组件的位置：

```json
"pos": {
  "left": "1",
  "top": "1",
  "right": "24",
  "bottom": "32"
}
```

上下左右，四个位置，`right` 也可以换做 `width`，`bottom` 可以换成 `height`，当然含义也发生改变。

如果没有设定 `right` 和 `width`，则组件扩展到最右侧边界；如果没有设定 `bottom` 和 `height`，则组件扩展到最底部边界。

这里的数值是基于网格的，从 1 开始。两个组件相邻，边界的数值相同（而不是 +1）。

#### `beBackground`（Boolean）（唯一）

组件被作为面板背景显示，只能有一个组件被设置为背景，多个的话……后面的覆盖前面的，当然也可以利用透明度来实现特殊效果

#### `canBeFullscreen`（Boolean）

组件被点击会全屏显示，再次点击恢复

#### `linkToSelf`（Boolean）

点击后跳转到这个组件的独立组件页面

#### `linkToUrl`（String）

链接到某个网址，因为 json 格式关系，个别符号需要转义，比如：

```json
"linkToUrl": "https:\/\/www.appinn.com\/"
```

**注意**：`beBackground`、`canBeFullscreen`、`linkToSelf`、`linkToUrl` 四个属性互斥，优先级从高到低。默认值均为：`false`

## 关于覆盖

在面板中，会用当前面板的配置项（Path：`/publish/config.json` > `panels` > `panelName`） 合并到全局配置项（Path：`/publish/config.json` > `global`）再进行获取。（这里所说的合并，都是指向后覆盖）

而面板中的工具，则会将当前工具配置合并到上面的结果之后再获取相应的配置。所以，比如：`canBeFullscreen`，完全可以放在 `global` 中作为全局默认设定。

---

现在你已经学会了如何进行配置，只需要到[组件列表](./components.md)中选择你需要的组件就对了。


[<<< 返回目录](./start.md) | [<<< 返回配置](./config.md) | [组件列表](./components.md)