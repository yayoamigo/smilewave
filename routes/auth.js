const router = require("express").Router();

router.get("/", (req,res)=>{
    res.send('auth page');
})

module.exports = router