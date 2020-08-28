### 使用react-create-app创建react项目

# 1.npx create-react-app my-app
# 2.cd my-app
# 3.yarn start

### 按需加载

# npm run eject:拉取webpack配置文件
 eject error:
 1.文件被修改，无法执行脚
  删除.git文件夹,即删除本地git库
 2.src同级下存在config文件夹
  删除config文件夹
 3. Cannot find module 'babel-plugin-import' from 'C:\Users\Lenovo\Desktop\react\react-antd-demo'
  找不到模块，安装即可
  npm install babel-plugin-import --save

### fetch

## fetch error
 1.配置 http-proxy-middleware 项目无法启动
  const proxy = require('http-proxy-middleware')
  error:proxy is not a function 
  配置如下：
    const {createProxyMiddleware } = require('http-proxy-middleware');
    module.exports = function (app) {
      app.use(
        createProxyMiddleware(
          '/api',
          {
            target: 'https://localhost:3100',
            changeOrigin: true
          }
        )
      );
    };
  2.封装fetch
   src/tools/fetch.js
   import Fetch from "src/tools/fetch"
   let f = new Fetch({
     url:"https://www.baidu.com",
     method:"GET"
   })

# get
  fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
# post
  使用querystring模块配合
    fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept": "application/json,text/plain,*/*"
      },
      body: qs.stringify({
        user_id: "iwen@qq.com",
        password: "iwen123",
        verification_code: "crfvw"
      }),
    }).then(res => res.json()).then(
      data => {
        console.log(data)
      }
    )
# 错误信息
  使用catch捕捉
# 跨域
  develop env:
    1.package.json中添加 
    "proxy":"your corssOrigin url"

    2.引入 http-proxy-middleware 模块
    src文件夹下创建setupProxy.js文件配置以下内容
      module.exports = function (app) {
        app.use(
          "/api",//use api to replace your target url
          proxy(
            {
              target: "http://localhost:3100",//your url
              changeOrigin: true
            }
          )
        )
      }
  production env:

### react-router

# 安装
1. npm install react-router-dom --save
