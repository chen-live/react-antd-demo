import React from 'react';
import Basic from "./apis/apis"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      banners: []
    }
  }
  componentDidMount() {
    this.fetchDatas();
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
    let { banners } = this.state
    return (
      <div>
        {banners.length ?
          <ul>{
            banners.map((item, index) => {
              return <li key={index}>{item.title}</li>
            })}
          </ul>
          : <div>数据加载中……</div>}
      </div>
    )
  }
}

export default App;
