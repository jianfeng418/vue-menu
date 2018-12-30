# vmenu

> A Vue.js project

参数说明
<table>
<tr>
  <td>参数名称</td>
  <td>类型</td>
  <td>描述</td>
  </tr>
  <tr>
  <td>event</td>
  <td>Event</td>
  <td>鼠标点击事件</td>
  </tr>
    <tr>
  <td>list</td>
  <td>Array</td>
  <td>下拉菜单数据列表</td>
  </tr>
    <tr>
  <td>ulClass</td>
  <td>String</td>
  <td>为下拉菜单添加的类名</td>
  </tr>
</table>

list数据格式：
<table>
<tr>
  <td>参数名称</td>
  <td>类型</td>
  <td>描述</td>
  </tr>
  <tr>
  <td>icon</td>
  <td>String</td>
  <td>下拉项图标</td>
  </tr>
    <tr>
  <td>text</td>
  <td>String</td>
  <td>下拉项名称</td>
  </tr>
     <tr>
  <td>clickFun</td>
  <td>Function</td>
  <td>下拉项点击响应函数</td>
  </tr>
     <tr>
  <td>disabled</td>
  <td>Boolean</td>
  <td>是否下拉项置灰</td>
  </tr>
</table>
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
