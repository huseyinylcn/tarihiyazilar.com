const express = require('express')
const router = express.Router()


const DetailGet = require('../Models/DetailGet')
const ListeGet = require('../Models/ListeGet')
const hbrdtyget = require('../Models/hbrdtyget')
const hbrallget = require('../Models/hbrallget')






router.get('/', (req, res) => {
    let translateSelect = req.session.translate
    if (!translateSelect) { translateSelect = 'TR'}
if(!req.session.user){

        res.render('index', { title: 'Tarihi Yazılar' , dil:translateSelect ,active:true,sifre:req.session.sifre})
    }
    else{
        res.render('index', { title: 'Tarihi Yazılar' , dil:translateSelect ,active:false,sifre:0})

    }
   

})


router.get('/liste', (req, res) => {

    let translateSelect = req.session.translate
    if (!translateSelect) { translateSelect = 'TR'}

    if(!req.session.user){
        ListeGet.ListeGetF().then((data) => {
            res.render('liste', { title: 'Tarihi Yazılar', veri: data, dil:translateSelect ,active:true,sifre:0})
        })
        
    }
    else{
        ListeGet.ListeGetF().then((data) => {
            res.render('liste', { title: 'Tarihi Yazılar', veri: data, dil:translateSelect ,active:false,sifre:0})
        })

    }

   

})



router.get('/hakkimizda', (req, res) => {



    let translateSelect = req.session.translate
    if (!translateSelect) { translateSelect = 'TR'}
    if(!req.session.user){
        res.render('hakkimizda', { title: 'Tarihi Yazılar', dil:translateSelect ,active:true,sifre:0})
 
    }
    else{
        res.render('hakkimizda', { title: 'Tarihi Yazılar', dil:translateSelect ,active:false,sifre:0})

    }
})

router.get('/iletisim', (req, res) => {
    let translateSelect = req.session.translate
    if (!translateSelect) { translateSelect = 'TR'}
    if(!req.session.user){
        res.render('iletisim', { title: 'Tarihi Yazılar', dil:translateSelect ,active:true,sifre:0})
 
    }
    else{
        res.render('iletisim', { title: 'Tarihi Yazılar', dil:translateSelect ,active:false,sifre:0})

    }


})
router.get('/haber', (req, res) => {
    let translateSelect = req.session.translate
    if (!translateSelect) { translateSelect = 'TR'}
    
    if(!req.session.user){
        hbrallget.hbrallgetF().then((data)=>{
            res.render('haber', { title: 'Tarihi Yazılar',veri:data , dil:translateSelect ,active:true,sifre:0})
        })

    }
    else{
        hbrallget.hbrallgetF().then((data)=>{
       
            res.render('haber', { title: 'Tarihi Yazılar',veri:data , dil:translateSelect ,active:false,sifre:0})
        })
   

    }
    
    


})

router.get('/haber/:id', (req, res) => {
  
    let translateSelect = req.session.translate
    if (!translateSelect) { translateSelect = 'TR'}
    if (!req.session.user) {
    hbrdtyget.hbrdtygetF(req.params.id).then((data)=>{
       
        res.render('haberdetay', { title: 'Tarihi Yazılar',data:data[0], dil:translateSelect ,active:true,sifre:0})
    })
}else{
    hbrdtyget.hbrdtygetF(req.params.id).then((data)=>{
       
        res.render('haberdetay', { title: 'Tarihi Yazılar',data:data[0], dil:translateSelect,active:false,sifre:0 })
    })
}

})


router.get('/:city/:town/:id', (req, res) => {
    let translateSelect = req.session.translate

    if (!translateSelect) { translateSelect = 'TR'}
    if (!req.session.user) {
    DetailGet.DetailGetF(req.params.city, req.params.town, req.params.id).then(data => {
        res.render('details', {
            title: 'Tarihi Yazılar',
            img: data.mezarimgpath,
            baslik: data.esertitle,
            translate: data.esertarnslate,
            hakkinda: data.eserhakkinda
            , dil:translateSelect,
            active:true,sifre:0
        })
    }).catch(err => {
        res.render('bekleme', { title: 'Park', dil:translateSelect,active:true,sifre:0 })
    })
}else{

    DetailGet.DetailGetF(req.params.city, req.params.town, req.params.id).then(data => {
        res.render('details', {
            title: 'Tarihi Yazılar',
            img: data.mezarimgpath,
            baslik: data.esertitle,
            translate: data.esertarnslate,
            hakkinda: data.eserhakkinda
            , dil:translateSelect,
            active:false,sifre:0
        })
    }).catch(err => {
        res.render('bekleme', { title: 'Park', dil:translateSelect,active:false,sifre:0 })
    })
}
})



router.post('/translate', (req, res) => {
    req.session.translate = req.body.translate
    res.redirect('/')
})



module.exports = router