const express = require('express')
let session = require('express-session')

const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const sql = require('mssql')



const app = express()


app.use(bodyParser.json());
 

app.use(express.static(path.join(__dirname, 'Public')));
app.use('/custompath', express.static(path.join(__dirname, '../admin.tarihiyazilar.com/Public')));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/Views/Site')


app.use(session({
  secret: '739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: null }
}))


const config = {
  user: 'sa',
  password: '123',
  server: '127.0.0.1',
  database: 'QR',
  options: {
    encrypt: false,
  },
};
const main = require('./Router/main')
const users = require('./Router/users')
const HaberEkle = require('./Router/HaberEkle')



sql.connect(config).then(()=>{

  app.use('/', main)
  app.use('/users/',users)
  app.use('/haberekle/',HaberEkle)





  
  
  let port = process.env.PORT || 80 
  
  app.listen(3000, () => {
    console.log('Server Connect')
  })
  
})




