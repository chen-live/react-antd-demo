#  使用react-create-app创建react项目
# npm install npx -g
# 1.npx create-react-app my-app
# 2.cd my-app
# 3.yarn start

#  按需加载

# npm run eject:拉取webpack配置文件
 eject error:
 1.文件被修改，无法执行脚
  删除.git文件夹,即删除本地git库
 2.src同级下存在config文件夹
  删除config文件夹
 3. Cannot find module 'babel-plugin-import' from 'C:\Users\Lenovo\Desktop\react\react-antd-demo'
  找不到模块，安装即可
  npm install babel-plugin-import --save

#  fetch

## fetch error
 1.配置 http-proxy-middleware 项目无法启动
  const proxy = require('http-proxy-middleware')
  error:proxy is not a function 
  配置如下：
    const { createProxyMiddleware } = require('http-proxy-middleware');
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
    "proxy":"your corss Origin url"

    2.引入 http-proxy-middleware 模块
    src文件夹下创建setupProxy.js文件配置以下内容
      module.exports = function (app) {
        app.use(
          "/api", //use api to replace your target url
          proxy(
            {
              target: "http://localhost:3100",//your url
              changeOrigin: true
            }
          )
        )
      }
  production env:

#  react-router
# https://reacttraining.com/blog/react-router-v6-pre/#nested-routes-and-layouts
 ## 安装
    1. npm install react-router-dom --save
    2. SPA单页面应用
 ## BrowserRouter && HashRouter
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
    传参：
      https://www.baidu.com/:id?/:name
      props.match.params.id
      props.match.params.name
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

#  redux
  调试工具：
    reudx-devtools-extension

 ## 创建接收者reducer（多个或单个），合并多个接收者，创建一个store库，创建constans常量（即触发的动作），创建actions，使用switch case 获取触发的动作，执行相应的代码（注意：store是只读的，唯一改变它的方式是触发action），页面中引入store库，使用store.getState()获取状态，使用store.dispatch({type:"your constans"})来触发action,改变store库中状态
  react-redux 入门教程 阮一峰
  一般情况下状态提升能够解决大部分组件传参的问题，但是如果多个文件需要同一状态就会导致文件形成强耦合，后期不好维护
  react 状态管理，类似于vue的vuex，将状态定义在仓库，分发给各个需要的组件，降低组件的强耦合性
  1. 安装
   npm install redux --save-dev
   redux js状态管理
   react-redux react数据封装处理
  2. 用法
   创建一个store仓库
   reducer.js:
    const reducer = (state = 0, action) => {
      switch (action.type) {
        case "INCREMENT":
          return state + 1;
        case "DECREMENT":
          return state - 1;
        default:
          return state
      }
    }
    export default reducer
    --------------------
    store.js:
    import reducer from "./reducer" 
    import {createStore} from "redux"
    const store = createStore(reducer);
    export default store;
    --------------------
    Demo.jsx:
    import React from "react"
    import store from "./store"
    export default class ReduxDemo extends React.Component{
      constructor(){
        super()
        this.state={
          count:store.getState()
        }
        this.decrementHandler=this.decrementHandler.bind(this)
        this.incrementHandler=this.incrementHandler.bind(this)
      }
      incrementHandler(){
        store.dispatch({//改变store库中变量
          type:"INCREMENT"
        })
        this.setState({
          count:store.getState()
        })
      }
      decrementHandler(){
        store.dispatch({
          type:"DECREENT"
        })
        this.setState({
          count:store.getState()//获取库中内容
        })
      }
      render(){
        return (
        <div>
          <h2 style={{ textAlign: "center" }}>{store.getState()}</h2>
          <div style={{ textAlign: "center" }}>
            <button onClick={this.increaseHandler}>increase</button>
            <button onClick={this.decreaseHandler}>decrease</button>
          </div>
        </div>
        )
      }
    }

   ## error
     store.dispatch is not a function
     应引入index.js 而不是reducer.js

#  react-redux
 ## 创建reducer文件夹，在其中定义reducers接收者（一个或多个）
 ## 创建concatReducer.js合并多个接收者（combineReducers）
 ## 创建store.js库，引入接收者，创建store（createStore）库（可在创建库时引入middleware中间件 #  middleWare）
 ## 创建actions文件夹，用来创建你要执行的动作，创建的文件中引入你创建的constans并用switch case用来捕捉你需要执行的动作，并执行对应的代码块
 ## 页面顶级组件中引入{Provider} from "react-redux"，引入store库，使用<Provider store={store}></Provider>标签包裹子组件
 ## 子组件中引入 {connect} from "react-redux",引入需要触发的action文件(yourActions)，引入{bindActionCreators} from "redux",创建mapStateToProps and mapDispatchToProps方法，render方法中使用this.props.yourActions.actions()去触发action去改变store库，最终导出connect连接对象 export ddefault connect(mapStateToProps,mapDispatchToProps)(your page class)
  const mapStateToProps = (state) => {
    console.log(state)
    return {
      counter: state.reducer
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      CounterActions: bindActionCreators(CounterActions, dispatch)
    }
  }
  1. 安装
    npm install --save-dev react-redux
  2. 使用
    使用redux创建一个store库
    import {Provider} from "react-redux"
    import store from "MyStore"
    export default class ReactReduxDemo extends React.Component{
      render(){
        return (
          <Provider store={store}>
            <MyConponent/>
          </Provider>
        )
      }
    }
    -------------------
    actions.js:
    export function increment() {
      return {
        type: "INCREMENT"
      }
    }
    export function decrement() {
      return {
        type: "DECREMENT"
      }
    }
    -------------------
    MyConponent:
    import {connect} from "react-redux"
    import {increment,decrement} from "actions"
    export default class MyComponent extends React.Component{
      render(){
        const { increment, decrement } = this.props;
        return (
          <div>
            <h2 style={{ textAlign: "center" }}>{this.props.counter}</h2>
            <div style={{ textAlign: "center" }}>
              <button onClick={() => { increment() }}>increase</button>
              <button onClick={() => { decrement() }}>decrease</button>
            </div>
          </div>
        )
      }
    }
    const mapStateToProps = (state) => {
      return {
        counter: state
      }
    }
    const mapDispatchToProps = (dispatch) => {
      return {
        increment: () => {
          dispatch(increment())
        },
        decrement: () => {
          dispatch(decrement())
        }
      }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo) 
  3. 参数传递
    <button onClick={() => { increment(5) }}>increase</button>
    <button onClick={() => { decrement(10) }}>decrease</button>
    actions.js:
    import * as consts from "../constans/index"
    export function increment(num) {
      return {
        type: consts.INCREMENT,
        num
      }
    }
    export function decrement(num) {
      return {
        type: consts.DECREMENT,
        num
      }
    }
    reducer.js
    import * as consts from "./constans/index"
    const reducer = (state = 0, action) => {
      switch (action.type) {
        case consts.INCREMENT:
          return state + action.num;
        case consts.DECREMENT:
          return state - action.num;
        default:
          return state
      }
    }
    export default reducer

  
  
#  Context
 ## 为一个组件树设置一个全局的数据
  perent:
  // 创建一个Context上下文对象
  export default const {Provider,Consumer} = React.createContext("defaultValue");
  子组件引入Consumer并且在Consumer标签内使用函数导出所需要的数据即可
  child:
  import {Consumer} from "./Parent"// 引入父级创建的上下文对象，可以直接引用
  render(){
    // const theme=this.context //theme 直接访问到上下文对象的值
    return {
      <Consumer>
        {(value)=><div>{value}</div>} 
      </Consumer>
    }
  }
  child.ContextType=Consumer // 给class绑定上下文对象
 ## Context 可以传递任意类型的值
  1. 传递函数
  见src/view/Context

#  错误边界
  代码中部分js的错误可能会导致整个页面崩溃，为了避免解决这个问题，react引入了新的概念“错误边界”,能够在捕捉到错误是渲染备用UI，而不是整个页面崩溃
 ## error:
  1. 错误边界设置后开发环境页面依然崩溃，build出来后页面错误处理正常进行
  2. 无法处理事件处理器异常，事件处理器异常依旧要用try catch捕捉
 ## 设置捕获错误的组件，在组件标签内处理可能出现错误的内容，出现错误则渲染错误界面，未出现错误则渲染props.children

#  ref 转发
  1. 
  const ref=React.createRef();
  componentDidMount(){
    ref.current.style.background="#0aa1ed"
  }
  render(){
    return (
      <div ref={ref}>dom</div>
    )
  }
  2. 
  const el = React.forwardRef((porps,ref)=>{
    return (
      <div ref={ref}>{props.children}</div>
    )
  })
 ## 配合高阶组件


#  高阶组件 HOC
# 将一个组件作为参数，返回新的UI
# 在一个组件定义逻辑，多个组件共享


#  middleware 中间件
## 为redux添加中间件
  在创建仓库之前创建中间件
  同时从redux中引入applyMiddleware
  store.js:
    import {createStore,applyMiddleware} from "redux"
    import reducer from "MyReducer"
    // create a middleware
    const errorCollect = store=>next=>action=>{
      try{
        next(action)
      }catch(e){
        console.log("error",e)
      }
    }
    const store = createStore(MyReducer,{},applyMiddleware(errorCollect))//多个中间件用逗号隔开
    export default store
    redux-logger: // 官方提供的logger工具
    npm install --save-dev redux-logger
    import reduxLogger from "redux-logger"
    const store = createStore(MyRedcucer,{},applyMiddleware(reduxLogger))
    export default store
 ## 处理异步
    正常情况下在action中添加异步操作会出现 Actions must be plain objects. Use custom middleware for async actions.
    at dispatch；
    也就是异步操作必须用中间件进行处理。在中间级挂载前添加redux-thunk中间件即可
    npm install --save-dev redux-thunk
    store.js:
     import thunk from "redux-thunk"
     import MyStore from "MyStore"
     import {createStore,applyMiddleware} from "redux"
     const store = createStore(MyStore,{},applyMiddleware(thunk))
     export default store
















