const express = require("express")
const app = express()
const users = require("./routers/users")
const debug = require("debug")("my-application")

app.use("/api/users", users)
app.listen(3030, (req, res) => {
  debug("server listen 3030......")
})