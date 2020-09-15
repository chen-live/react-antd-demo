### react-router-dom  
#### BrowserRouter  
1. 安装  
> npm install -s react-router-dom
2. 使用  
>
```javascript  
import React from "react"
import Home from "./children/Home"
import About from "./children/About"
import Inbox from "./children/Inbox"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default class App extends React.Component {
  render() {
    return (
      <Router>
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
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
      </Router>
    )
  }
} 
```  
3. 传参   
```javascript
Home.js
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
        // 此处定义传递的参数，About界面使用this.props.match.params.tel接收
        <Route path="/about/:tel?/:id?" component={About} />
        <Route path="/inbox" component={Inbox} />
      </Router>
    )
  }
}
```
About.js
//稍为改动
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