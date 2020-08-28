import Fetch from "../tools/fetch";
export default {
  loginHandler(user_id, password, verification_code) {
    const body = { user_id, password, verification_code }
    return new Fetch({
      url: "/api/blueberrypai/login.php",
      method: "POST",
      body
    })
  },
  localHandler() {
    return new Fetch({
      url: "/api/v1/list",
      method: "GET",
      own: true
    })
  },
  bannerHandler() {
    return new Fetch({
      url: "/api/blueberrypai/getIndexBanner.php",
      method: "GET"
    })
  }
}