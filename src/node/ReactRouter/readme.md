### react-router-dom  
#### BrowserRouter  
. 安装  
> npm install -s react-router-dom
. 使用
>   
```javascript  
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Home from "./Home"
import Inbox from "./Inbox"
export default class App extends React.Component{
  render(){
  <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/inbox">Inbox</Link></li>
    </ul>
    // exact表示精准匹配
    <Route path="/" exact component={Home}/>
    <Route path="/inbox" component={Inbox}/>
  </Router>
  }
}  
```