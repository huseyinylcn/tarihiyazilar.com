const express = require("express");
const session = require("express-session");
const router = express.Router();

let UserControl = require("../Models/userControl")
let userekle = require("../Models/userekle");
;

router.post("/control/", (req, res) => {
  UserControl.UserControlF(req.body.mail, req.body.sifre).then((data) => {
    console.log(req.body);
    req.session.user = data[0].email;
    res.redirect(`${req.body.sayfa}`);

  }).catch(()=>{
    console.log('şifre yanlış')
    res.redirect('/')
  })
});

router.post("/ekle/", (req, res) => {
console.log(req.body)

if(req.body.sifre == req.body.sifre2){

userekle.userEklemeSQLF(req.body.ad, req.body.soyad ,req.body.sifre, req.body.mail ).then((err)=>{
    req.session.user =  req.body.mail;
    res.redirect(`${req.body.sayfa}`);
})
}
  });

router.get("/logout/", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("oturumu kapnmadı");
    } else {
      res.redirect("back");
    }
  });
});

module.exports = router;
