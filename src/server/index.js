const express = require("express")
const app = express()
const users = require("./routers/router")
app.get("/", (req, res) => {
  res.send({
    msg: "hello"
  })
})
app.use("/api/users", users)
app.listen(3030, (req, res) => {
  console.log("server listen 3030......")
})