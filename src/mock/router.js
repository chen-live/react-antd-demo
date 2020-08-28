const express = require("express");
const router = express.Router();
router.get("/api/v1/list", (req, res) => {
  res.send([
    { name: "iwen", age: 20 },
    { name: "mary", age: 21 }
  ])
})
module.exports = router