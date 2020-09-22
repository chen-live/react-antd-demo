# react-router-dom  

## 示例

1. 安装  

    > npm install -s react-router-dom

2. 使用

    结构

    > index.js  
    > App.js  
    > children  
    >> Home.js  
    >> About.js  
    >> Inbox.js  

    Home.js

    ```javascript
    //About.js和Inbox.js类似
    import React from "react"
    export default class Home extends React.Component{
      render(){
        return (
          <div>Home</div>
        )
      }
    }
    ```

    App.js

    ```javascript  
    import React from "react"
    import Home from "./children/Home"
    import About from "./children/About"
    import Inbox from "./children/Inbox"
    /**
    * Router 路由容器
    * Route 路由规则，一个Route表示一个路由规则
    * Route 中，path表示路径，component表示要渲染的组件，exact表示精准匹配，不使用exact会出现一个路径渲染多个组件的情况
    */
    import { BrowserRouter as Router, Route, Link } from "react-router-dom"
    export default class App extends React.Component {
      render() {
        return (
          <Router>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/inbox">Inbox</Link></li>
            </ul>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/inbox" component={Inbox} />
          </Router>
        )
      }
    }
    ```

    index.js

    ```javascript
    import React from "react"
    import ReactDom from "react-dom"
    import App from "./App"
    ReactDom.render(<App/>,document.getElementById("root"))
    ```

3. 传参

    ```javascript
    import React from "react"
    import Home from "./children/Home"
    import About from "./children/About"
    import Inbox from "./children/Inbox"
    import { BrowserRouter as Router, Route, Link } from "react-router-dom"
    export default class App extends React.Component {
      constructor() {
        super()
        this.state = {
          lists: [1000, 1100, 1234]
        }
      }
      render() {
        // 此处使用link标签进行传参，必须与下方About组件一致，否则页面不显示
        const linkList = this.state.lists.map(item => <Link key={item} to={`/about/${item}/${item}`}>{item}<br/></Link>)
        return (
          <Router>
            {linkList}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/inbox">Inbox</Link>
              </li>
            </ul>
            <Route path="/" component={Home} exact />
            {/* 此处定义传递的参数，About界面使用this.props.match.params.tel接收*/}
            <Route path="/about/:tel?/:id?" component={About} />
            <Route path="/inbox" component={Inbox} />
          </Router>
        )
      }
    }
    ```

    About.js  
    稍为改动

    ```javascript
    import React from "react"
    export default class About extends React.Component{
      render(){
        const params = this.props.match.params
        return (
          <div>tel:{params.tel}</div>
          <div>id:{params.id}</div>
        )
      }
    }
    ```

4. 嵌套路由

    Inbox.js

    ```javascript
    import React from "react"
    import {Route,Link} from "react-router-dom"
    export default class Inbox extends React.Component{
      render(){
        return (
          <div>
            <ul>
              {/*定义跳转的路由，外加传递的参数*/}
              <li><Link to={`${this.props.match.patch}/Components`}>Components</Link></li>
              <li><Link to={`${this.props.match.patch}/VState`}></Link></li>
            </ul>
            {/*定义路由，外加参数*/}
            <Route path={`${this.props.match.path}/:Id` component={Topic}}></Route>
          </div>
        )
      }
    }
    function Topic(props){
      const {Id} = props.match.params;
      return <h2>{{Id ? "your id is " + Id : "please select a topic"}}</h2>
    }

    ```

5. 异同   BrowserRouter & HashHistory
    |               | 原理                                                     | 特点                                                                                |
    |:--------------|:---------------------------------------------------------|:------------------------------------------------------------------------------------|
    | BrowserRouter | H5的historyAPI（`pushState`,`replaceState`和`popstate`） | url会被web server解析，需要后端配合重定向，否则访问到没有的界面会出现空白界面       |
    | HashHistory   | URL的HASH                                                | /#/router不会被web server解析，window.location.hash被react-router解析匹配对应的路由 |

### BrowserRouter

1. basename:string
   所有位置的基准url，用于设置子目录，`basename`的正确格式是前面有一个前导斜线，但不能有尾部斜线

   ```javascript
   <BrowserRouter basename="/home">
    <Link to="/today"></Link>
   </BrowserRouter>
   ```

   以上被解析为

   ```javascript
   <Link to="/home/today"></Link>
   ```

2. forceRefresh

   如果为true，在页面跳转时会刷新，只有在不支持HTML5 history API的浏览器中使用此功能

   ```javascript
   const supportHistory = "pushState" in window.history;
   <BrowserRouter forceRefresh={!supportHistory}/>
   ```

3. getUserConfirmation:func

   用于确认导航的函数，默认使用[window.confirm](#fragment),例如，当从`/a`跳转到`/b`时，会默认使用`confirm`函数弹出一个提示，用户点击确认后进行导航，否则不做任何处理，需要配合`<Prompt/>`一起使用，

   ```javascript
   const GetUserConfirm=(msg,callback){
     const allowTransfer = window.confirm(msg);
     callback(allowTransfer)
   }
   <BrowserRouter getUserConfirmation={getUserConfirm}/>
   ```

4. keyLength:number

    location.key的长度，默认为6

    ```javascript
    <BrowserRouter keylength={12}/>
    ```

5. children:node
    选择一个要渲染的子元素
    *在react的版本低于16时，你必须选择一个单个的标签去渲染，如果需要渲染多个标签，尝试放在一个单个的div标签中*

### HashRouter

1. basename:string

2. getUserConfirmation:func

    用于确认导航的功能，默认使用`window.confirm`

3. hasyType:string
    默认使用`window.location.hash`，分为三种
    + slash
      默认，带有斜线
       `http://localhost:3000/#/modus-create`
    + noslash
      不带斜线
       `http://localhost:3000/#modus-create`
    + hashbang
      **`#`** 后方添加 **`!`**
      `http://localhost:3000/#!/modus-create`

### Link

1. to:string|object|function
    + string:

    ```javascript
    <Link to="/about?sort=name"/>
    ```

    + object

    ```javascript
    <Link to={{
      pathname:"/about",
      search:"?sort=name",
      hash:"#the-hash"
      state:{formDashboard:true}
    }}>
    {/*下一个页面用this.props.location访问*/}
    ```

    + function

    ```javascript
    <Link to={location=>({...location,pathname:"/about"})}>
    <Link to={location=>`/about?sort=name`}>
    {/*下一个页面用this.props.location访问*/}
    ```

2. replace:bool
    替换location历史记录中当前路由，而非新增

    ```javascript
    <Link to="/about" replace/>
    ```

3. innerRef:function|RefObject
    允许访问组件的底层引用

    + function:

    ```javascript
    <Link to="/about" innerRef={node=>{
      //node指向你最终挂载的DOM元素，卸载时为null 即为Link标签自身
      console.log(node) //<a href="/about"/>
    }}/>
    ```

    + RefObject:

    ```javascript
    const el=React.crateRef();
    <Link to="/about" innerRef={el}/>
    ```

4. component:React.Component
    如果想使用自己的导航组件，传递自身的porp即可

    ```javascript
    const FancyLink = React.forwardRef((props,ref)=>{
      <a ref={ref} {props.children}/>
    })
    <Link to="/about" component={FancyLink}/>
    ```

### NavLink

1. activeClassName:string
    元素被选中时提供的类名，默认为active，与className同时加入元素

    ```javascript
    <NavLink activeClassName="myClass">
    ```

2. activeStyle:object
    元素被选中时提供的style样式

    ```javascript
    <NavLink activeStyle={{font-size:25px;color:"#f0f0f0"}}>
    ```

3. exact:bool
    启用时，仅会在严格模式匹配到时才启用activeClassName/activeStyle

    ```javascript
    <NavLink exact activeStyle={{font-size:25px;color:"#f0f0f0"}}>
    ```

4. strict:bool
    如果为true，在匹配到时将会考虑匹配尾部斜线

5. isActive:func
    使用逻辑去确定`<Link/>`是否处于被选中状态

    ```javascript
    <NavLink activeStyle={{font-size:25px;color:"#f0f0f0"}}>
    ```

### Prompt

路由跳转前执行

```javascript
export class Pmt extends React.Component{
  constructor(){
    super()
    this.state={
      message:""
    }
  }
  changeHandler(e) {
    this.setState({
      message: e.target.value
    })
  }
  render(){
    return (
      <div>
        <Prompt when={!!this.state.message} message={"确定要离开吗？"} />
        <input onChange={this.changeHandler} value={this.state.message}/>
      </div>
    )
  }
}
```
