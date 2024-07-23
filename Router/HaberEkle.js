const express = require('express')

const router = express.Router()
const multer = require('multer')
const path = require('path')

const crypto = require('crypto');


let HaberEklemeSQL = require('../Models/Update-Adding-Inscriptions/HaberEklemeSQL')
let fotograflarGet = require('../Models/Data-Fetch/fotograflarGet')
let haberler = require('../Models/Data-Fetch/haberler')
let haberdetay = require('../Models/Data-Fetch/haberdetay')


let fotografEkle = require('../Models/Update-Adding-Inscriptions/fotografEkle')
let haberguncelleme = require('../Models/Update-Adding-Inscriptions/haberguncelleme')
let deletehaber = require('../Models/Update-Adding-Inscriptions/deletehaber')





function rastgeleTokenUretuzunluk(uzunluk) {
    return crypto.randomBytes(uzunluk).toString('hex');
}



const uploadDirectory = path.join(__dirname, '../../admin.tarihiyazilar.com/Public/img/Haber/');

// Dosya yükleme işlemi için multer konfigürasyonu
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        // Resim dosyasının adını rastgele oluşturun
        const uniqueSuffix = rastgeleTokenUretuzunluk(10)
        const fileExtension = path.extname(file.originalname);
        cb(null, uniqueSuffix + fileExtension);
    },
});

const upload = multer({ storage: storage });




router.post('/haberfotograf',upload.single('resiminput'),  (req, res) => {
    var dosyaAdi = path.basename(req.file.filename);
  
    fotografEkle.fotografEklemeF(req.session.user,`/custompath/img/Haber/${dosyaAdi}`).then((data)=>{
        res.json({ success: 'Fotoğraf Eklendi',  });
    })
})




router.get('/', (req, res) => {

    let translateSelect = req.session.translate
    if (!translateSelect) { translateSelect = 'TR'}
    if(!req.session.user){
        req.session.sifre = 1
             res.redirect('/')

    }else{
        res.render('Haberekle', { title: 'Tarihi Yazılar' , dil:translateSelect ,active:false,sifre:0 })

    }
   

})
router.get('/liste', (req, res) => {
    let translateSelect = req.session.translate
    if (!translateSelect) { translateSelect = 'TR'}
    if (!req.session.user) {
        req.session.sifre = 1
        res.redirect('/')
    } else {
        haberler.hbrallgetF(req.session.user).then((data)=>{
            res.render('hbrliste', { title: 'Tarihi Yazılar',veri:data , dil:translateSelect ,active:false ,sifre:0 })
        })
     

    }

})
router.get('/duzenle/tt/:id/', (req, res) => {
    let translateSelect = req.session.translate
    if (!translateSelect) { translateSelect = 'TR'}

    if (!req.session.user) {
        req.session.sifre = 1
        res.redirect('/')
    } else {
        haberdetay.hbrdetF(req.session.user,req.params.id).then((data)=>{
            res.render('haberduzenle', { title: 'Tarihi Yazılar' ,veri:data , dil:translateSelect ,active:false,sifre:0 })

        })

     

    }

})
router.post('/duzenle/guncelle', (req, res) => {
    if (!req.session.user) {
        req.session.sifre = 1
        res.redirect('/')
    } else {
        haberguncelleme.HaberGuncellemeSQLF(req.body.id, req.body.html, req.session.user, req.body.kapakfoto, req.body.kapaktitle).then((data)=>{
            res.json({ success: 'Eklendi',  });
       

        })
    }
})
router.post('/duzenle/sil', (req, res) => {
    if (!req.session.user) {
        req.session.sifre = 1
        res.redirect('/')
    } else {
        deletehaber.HaberDeleteSQLF(req.body.id).then((data)=>{
            res.json({ success: 'Silindi',  });

        })
    }
})


router.post('/haberekleme', async (req, res) => {

    console.log(req.body)
    let token = await rastgeleTokenUretuzunluk(15)
    HaberEklemeSQL.HaberEklemeSQLF(token, req.body.html, req.session.user, req.body.kapakfoto, req.body.kapaktitle).then((data) => {
        res.json({ success: 'Eklendi',  });
    })

})


router.get('/haberfotograf', async (req, res) => {
    fotograflarGet.fotografGetF(req.session.user).then((data) => {
        res.send(data)
    })
})





module.exports = router