const express = require('express')

const router = express.Router()
let UserControl = require('../Models/UsersControl')

let AdminDetail = require('../Models/AdminDetail')
let QrGet = require('../Models/QrGet')










router.get('/739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb', (req, res) => {
    res.render('adminLogin', { title: 'Admin' })
})
// 
router.post('/739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb', (req, res) => {
    UserControl.UserControlF(req.body.mail, req.body.password).then((data) => {

        if ((data.length) != 0) {
            req.session.user = req.body.mail;
            res.redirect('/admin/IAdd')
        }
        else {
            res.redirect('/admin/739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb')

        }
    })

})



router.get('/:city/:town/:id', (req, res) => {
    if (!req.session.user) {
        res.redirect('/admin/739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb')
    } else {
        AdminDetail.AdminDetailGet(req.params.city, req.params.town, req.params.id).then((data) => {
            res.render('adminDetail', { title: 'Admin', veri: data })
        })
    }
})


router.get('/qrmanagement', (req, res) => {

    if (req.session.user) {
        QrGet.QrGetF().then(data => {
            res.render('qrManagement', { title: 'Home', veri:data})
        })
    }
    else {
        res.redirect('/admin/739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb')

    }


})



router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/admin/739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb'); // Oturum başarıyla temizlendi, giriş sayfasına yönlendirin
        }
    });
});



module.exports = router