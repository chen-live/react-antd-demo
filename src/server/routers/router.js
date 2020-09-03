const express = require("express")
const router = express.Router()
router.get("/", (req, res) => {
  res.send({
    msg: "hello"
  })
})
// export default router
module.exports = router