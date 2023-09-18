const express = require('express')

const router = express.Router()

let Iadd = require('../Models/Iadd')






router.get('/',(req,res)=>{
    if (!req.session.user){
        res.redirect('/admin/739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb')
    }else{
        Iadd.IaddF(req.session.user).then((data)=>{
            res.render('IAdd',{title:'Admin',veri:data})
        })
    }
   
})






module.exports = router