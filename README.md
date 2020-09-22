# 使用react-create-app创建react项目

>npm install npx -g  
>npx create-react-app my-app  
>cd my-app  
>yarn start  

## 按需加载

## npm run eject:拉取webpack配置文件

 eject error:

 1. 文件被修改，无法执行脚
      删除.git文件夹,即删除本地git库
 2. src同级下存在config文件夹
      删除config文件夹
 3. Cannot find module 'babel-plugin-import' from 'C:\Users\Lenovo\Desktop\react\react-antd-demo'
      找不到模块，安装即可
      npm install babel-plugin-import --save

### fetch

  1. errors
      配置 http-proxy-middleware 项目无法启动
      const proxy = require('http-proxy-middleware')
      error:proxy is not a function
      如下配置即可：

      ```javascript
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
      ```

  2. 封装fetch

      src/tools/fetch.js

      ```javascript
        import Fetch from "src/tools/fetch"
        let f = new Fetch({
          url:"https://www.baidu.com",
          method:"GET"
        })
      ```

  3. get

      src/tools/fetch.js

      ```javascript
            fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
            .then(*res* *=>* res.json())
            .then(*data* *=>* {
          ​     console.log(data)
            })

      ```

  4. post

      使用querystring模块配合

      ```javascript
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
      ```

### 错误信息

  使用catch捕捉

### 跨域

develop env:

1. package.json中添加

    `"proxy":"such as https://www.baidu.com"`

2. 引入 http-proxy-middleware 模块

  `src文件夹下创建setupProxy.js文件配置以下内容`

```javascript
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
```

## react-router-dom

  1. [文档传送门](https://reacttraining.com/blog/react-router-v6-pre/#nested-routes-and-layouts)

  2. 安装

      > npm install react-router-dom --save
      > SPA单页面应用

  3. BrowserRouter && HashRouter
        [文档传送门](https://github.com/chen-live/react-antd-demo/blob/master/src/node/ReactRouter/readme.md)

## redux

  调试工具：
    reudx-devtools-extension

### 简介

+ 创建接收者reducer（多个或单个）

+ 合并多个接收者

+ 创建一个store库  

+ 创建一个store库  创建constans常量（即触发的动作）  

+ 创建actions

+ 使用switch case 获取触发的动作，执行相应的代码（注意：store是只读的，唯一改变它的方式是触发action）

+ 页面中引入store库，使用store.getState()获取状态，使用store.dispatch({type:"your constans"})来触发action,改变store库中状态

+ **一般情况下状态提升能够解决大部分组件传参的问题，但是如果多个文件需要同一状态就会导致文件形成强耦合，后期不好维护react 状态管理，类似于vue的vuex，将状态定义在仓库，分发给各个需要的组件，降低组件的强耦合性**

### 安装

  npm install redux --save-dev
  redux js状态管理
  react-redux react数据封装处理

### 用法  

  1. 创建一个store仓库

      reducer.js:

      ```javascript
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
      ```

      store.js:

      ```javascript
        import reducer from "./reducer"
        import {createStore} from "redux"
        const store = createStore(reducer);
        export default store;
      ```

      Demo.jsx:  

      ```javascript
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
      ```

  2. errors
     store.dispatch is not a function
     应引入index.js 而不是reducer.js

## react-redux

+ 创建`reducer`文件夹，在其中定义`reducers`接收者（一个或多个）

+ 创建`concatReducer.js`合并多个接收者（`combineReducers`）
+ 创建`store.js`库，引入接收者，创建`store（createStore）`库（可在创建库时引入`middleware`中间件 `middleWare`）
+ 创建actions文件夹，用来创建你要执行的动作，创建的文件中引入你创建的constans并用switch case用来捕捉你需要执行的动作，并执行对应的代码块
+ 页面顶级组件中引入{Provider} from "react-redux"，引入store库，使用`<Provider store={store}></Provider>`标签包裹子组件
+ 子组件中引入 `{connect} from "react-redux"`,引入需要触发的`action`文件(yourActions)，引入`{bindActionCreators} from "redux"`,创建`mapStateToProps and mapDispatchToProps`方法，`render`方法中使用`this.props.yourActions.actions()`去触发`action`去改变`store`库，最终导出`connect`连接对象 `export ddefault connect(mapStateToProps,mapDispatchToProps)(your page class)`

  ```javascript
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
  ```

  1. 安装

      npm install --save-dev react-redux

  2. 使用

      使用redux创建一个store库

      ```javascript
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
      ```

      actions.js:

        ```javascript
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
      ```

      MyConponent:

      ```javascript
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
      ```

  3. 参数传递

      `<button onClick={() => { increment(5) }}>increase</button>`
      `<button onClick={() => { decrement(10) }}>decrease</button>`
      actions.js:

        ```javascript
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
        ```

      reducer.js

      ```javascript
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
      ```

## Context

### 为一个组件树设置一个全局的数据

  perent:

  ```javascript
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
  ```

### 传递函数(`Context 可以传递任意类型的值`)

## 错误边界

  代码中部分js的错误可能会导致整个页面崩溃，为了避免解决这个问题，react引入了新的概念“错误边界”,能够在捕捉到错误是渲染备用UI，而不是整个页面崩溃

### errors

  1. 错误边界设置后开发环境页面依然崩溃，build出来后页面错误处理正常进行
  2. 无法处理事件处理器异常，事件处理器异常依旧要用try catch捕捉
  3. 设置捕获错误的组件，在组件标签内处理可能出现错误的内容，出现错误则渲染错误界面，未出现错误则渲染props.children

## ref 转发

  ```javascript
  const ref=React.createRef();
  componentDidMount(){
    ref.current.style.background="#0aa1ed"
  }
  render(){
    return (
      <div ref={ref}>dom</div>
    )
  }
  ```

  ```javascript
  const el = React.forwardRef((porps,ref)=>{
    return (
      <div ref={ref}>{props.children}</div>
    )
  })
  ```

  `配合高阶组件`

## 高阶组件 HOC

### 将一个组件作为参数，返回新的UI

### 在一个组件定义逻辑，多个组件共享

### middleware 中间件

 1. 为redux添加中间件
      在创建仓库之前创建中间件
      同时从redux中引入applyMiddleware
      store.js:

      ```javascript
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
      ```

      `redux-logger`: // 官方提供的logger工具

      ```javascript
        npm install --save-dev redux-logger
        import reduxLogger from "redux-logger"
          const store = createStore(MyRedcucer,{},applyMiddleware(reduxLogger))
        export default store
      ```

 2. 处理异步

      正常情况下在action中添加异步操作会出现 **Actions must be plain objects. Use custom middleware for async actions.**
      at dispatch；
      也就是异步操作必须用中间件进行处理。在中间级挂载前添加redux-thunk中间件即可
      >npm install --save-dev redux-thunk
      store.js:

      ```javascript
      import thunk from "redux-thunk"
      import MyStore from "MyStore"
      import {createStore,applyMiddleware} from "redux"
      const store = createStore(MyStore,{},applyMiddleware(thunk))
      export default store
      ```

## 进阶

  1. React.pureComponent 对数据进行浅比较，没有变化就不会触发render函数

  2. React.Fragment 防止html结构被打乱，解析为`<Fragment><li>li</li></Fragment>=><li>li</li>`

## react-hook

### 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用

### 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用

1. 在不使用class的情况下使用react语法与特性

>useState:

  ```javascript
  const [count,updateCount] = useState(0);数组结构相当于
  var c = useState();
  var count = c[0];
  var updateCount = c[1]

  import React,{useState} from "react"
  export default function(props){
    const [count,updateCount] = useState(0);
    return (
      <div>
        <p>click times is {count}</p>
        <button onClick={()=>updateCount(count+1)}>click</button>
      </div>
    )
  }
  ```

>useEffect:

  1. 在DOM渲染之后运行你的“副作用”函数，因为函数实在组件中声明的，所以可以访问到当前组件的props和state，每次DOM渲染都会调用useEffect函数，包括第一次
  2. 在useEffect函数中返回一个函数，是useEffect的清除机制，每一个useEffect函数都可以返回一个清除函数，可以将添加和移除“副作用”的逻辑一起定义，react会在组件销毁之前执行，会在执行当前useEffect对上一个useEffect进行清除

  ```javascript
  import React,{useState} from "react"
  export default function(props){
    const [count,updateCount] = useState(0);
    useEffect(()=>{
      document.title=`you use ${count} times`
    })
    return (
      <div>
        <p>click times is {count}</p>
        <button onClick={()=>updateCount(count+1)}>click</button>
      </div>
    )
  }
  ```

  `eslint-plugin-react-hooks`
    npm install eslint-plugin-react-hooks --save-dev

>useContext:

  1. 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 value prop 决定。
