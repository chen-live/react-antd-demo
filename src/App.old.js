import React from 'react';
import Basic from "./apis/apis"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Home from "./view/Home"
// import Mine from "./view/Mine"
// import Nav from "./components/Nav"
// import UCenter from "./view/UCenter"
// import NotFound from "./view/NotFound"
// import Demo from "./view/Demo"
// import ParentContext from "./view/Context/Parent"
// import ErrorBoundary from "./view/ErrorBoundary/ErrorBoundary"
// import Ref from "./view/Ref/ref"
// import Parent from "./components/store/Parent"
// import { createStore } from "redux"
// import RefHoc from "./view/Ref/withHOC/RefHoc"
// import RouterIndex from "./view/ReactRouter/index"
// import ReduxDemo from "./view/Redux/Demo"
// import ReactReduxDemo from "./view/ReactRedux/index"
// import MiddleWareDemo from "./view/MiddleWare"
// import Demo1 from "./components/Demo1/router"
// import HooksDemo from "./view/Hooks"
import NodeReactRouter from "./node/ReactRouter/index"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      banners: []
    }
  }
  componentDidMount() {
    // for (let i = 0; i < 10; i++) {
    //   Basic.loginHandler("iwen@qq.com", "iwen123", "crfvw")
    // }
    // this.fetchDatas();
  }
  async fetchDatas() {
    let w = await Basic.loginHandler("iwen@qq.com", "iwen123", "crfvw")
    let f;
    try {
      f = await Basic.localHandler();
    } catch (error) {
      console.error(error)
    }
    let b = await Basic.bannerHandler();
    console.log(w)
    console.log(f)
    this.setState({
      banners: b.banner
    })
  }
  render() {
    // let { banners } = this.state
    return (
      <div>
        {/* {banners.length ?
          <ul>{
            banners.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
          : <div>数据加载中……</div>} */}
        {/* <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route strict exact path="/mine" component={Mine} />
            <Route strict exact path="/mine/ucenter/:id?/:name?" component={UCenter} ></Route>
            <Route path="/demo" render={() => <Demo {...this.props} Name="你好" />} />
            <Route component={NotFound} />
          </Switch>
        </Router> */}
        {/* <Parent /> */}
        {/* <ParentContext /> */}
        {/* <ErrorBoundary /> */}
        {/* <Ref /> */}
        {/* <RefHoc /> */}
        {/* <RouterIndex /> */}
        {/* <ReduxDemo /> */}
        {/* <ReactReduxDemo /> */}
        {/* <MiddleWareDemo /> */}
        {/* <Demo1 /> */}
        {/* <HooksDemo /> */}
        <NodeReactRouter/>
      </div>
    )
  }
}

export default App;
