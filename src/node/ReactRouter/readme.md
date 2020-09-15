## react-router-dom  
### BrowserRouter & HashHistory 
1. 安装  
> npm install -s react-router-dom
2. 使用  
> 结构   
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
3. 嵌套路由  
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
4. 异同  
| 水果        | 价格    |  数量  |
| :------:   | :----:   | :----: |
| 香蕉        | $1      |   7   |
| 苹果        | $1      |   6    |
| 草莓        | $1      |   7    |
