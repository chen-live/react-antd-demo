// http://iwenwiki.com/api/blueberrypai/login.php
// fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
//   method: "POST",
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "Accept": "application/json,text/plain,*/*"
//   },
//   body: qs.stringify({
//     user_id: "iwen@qq.com",
//     password: "iwen123",
//     verification_code: "crfvw"
//   }),
//   // body: `user_id=iwen@qq.com&password=iwen123&verification_code=crfvw`
// }).then(res => res.json()).then(
//   data => {
//     console.log(data)
//   }
// )
// fetch("/api/v1/list")
//   .then(res => { return res.json() })
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.error(error)
//   })
import qs from "querystring"
import { basicurl } from "./basic"
export default class Fetch {
  constructor(config = { url: "", method: "", headers: {}, body: {}, own: false }) {
    this.url = config.own ? config.url : basicurl + config.url
    this.method = config.method
    // this.headers = config.headers
    this.headers = {}
    this.headers["content-type"] = "application/x-www-form-urlencoded"
    this.headers["Accept"] = "application/json,text/plain,*/*"
    Object.assign(this.headers, config.headers)
    this.body = config.body
    if (this.method.toLocaleLowerCase() === "get") {
      /**
       * @get
       */
      return new Promise((resolve, reject) => {
        fetch(this.url)
          .then(res => {
            res.status === 200
              ?
              resolve(res.json())
              :
              reject(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    } else {
      /**
       * @post  
       */
      return new Promise((resolve, reject) => {
        fetch(this.url, {
          method: this.method,
          headers: this.headers,
          body: qs.stringify(this.body)
        }).then(res => {
          res.status === 200
            ?
            resolve(res.json())
            :
            reject(res)
        })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}