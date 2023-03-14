const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('Hello trasaction page')
})
module.exports = router
