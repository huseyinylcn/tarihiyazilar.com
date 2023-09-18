const express = require('express')
const router = express.Router()


const DetailGet = require('../Models/DetailGet')
const ListeGet = require('../Models/ListeGet')





router.get('/', (req, res) => {
    res.render('index', { title: 'Osmanlı-Mezar-Taşları' })
})

router.get('/liste', (req, res) => {
    ListeGet.ListeGetF().then((data)=>{
        res.render('liste', { title: 'Osmanlı-Mezar-Taşları' , veri:data})

    })
})


router.get('/:city/:town/:id', (req, res) => {
    DetailGet.DetailGetF(req.params.city, req.params.town, req.params.id).then(data => {

        res.render('details', {
            title: 'Osmanlı-Mezar-Taşları',
            img: data.mezarimgpath,
            baslik: data.esertitle,
            translate: data.esertarnslate,
            hakkinda: data.eserhakkinda

        })
    }).catch(err=>{
        res.render('bekleme',{ title: 'Park',})
    })
})







module.exports = router