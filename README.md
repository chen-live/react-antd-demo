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
# https://reacttraining.com/blog/react-router-v6-pre/#nested-routes-and-layouts
# 安装
1. npm install react-router-dom --save
2. SPA单页面应用
# BrowserRouter && HashRouter
1. HashRouter 锚点链接
2. BrowserRouter h5新特性，上线之后需要后台做重定向处理
3. 路由
  引用：
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
  <Router> ->所有的路由都应包含在此标签中
    <Switch> ->表示同一时间只显示一个页面
      <Route path="/home" component={Home} /> ->(path：路径，component：引入的js或jsx)
      <Route strict exact path="/mine" component={Mine} /> ->(exact：精准匹配，strict：更为严格的匹配)
      <Route strict exact path="/mine/ucenter/:id?/:name" component={UCenter} /> -> (传参，组件用props.match.params.id接收，问号代表可以不传)
    </Switch>
  </Router>

  跳转：
  import { Link, NavLink } from "react-router-dom"
  <Link to="/mine" >Mine page</Link>
  <NavLink exact to="/home" activeClass="myClass" activeStyle={{ color: "green", fontSize: "50px" }}>Home page</NavLink>
  props.history.push(your router) 添加
  props.history.replace(your router) 替换
  1. 当组件没有被定义在<Router>标签中时this.props是一个空对象，无法使用this.props.push/replace去进行页面跳转，时就要用withRouter高阶组件进行路由注册
    import { withRouter } from "react-router-dom"
    export default withRouter(your class component or function component)
  2. 条件判断段是否进行路由跳转 prompt
    import { Prompt } from "react-router-dom"
    <Prompt when={your boolean} message={your message}>
  重定向：
  <Redirect form="/hello" to="/mine"></Redurect> -> 访问hello 自动跳转 mine 

  ### redux
  react-redux 入门教程 阮一峰
  一般情况下状态提升能够解决大部分组件传参的问题，但是如果多个文件需要同一状态就会导致文件形成强耦合，后期不好维护
  react 状态管理，类似于vue的vuex，将状态定义在仓库，分发给各个需要的组件，降低组件的强耦合性


  
  

