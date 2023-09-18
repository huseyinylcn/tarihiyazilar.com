const express = require('express')
let session = require('express-session')
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const sql = require('mssql')

const app = express()
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/Views/Site')

app.use(session({
  secret: '739f6d87048e4b3951d9d59acfaf441dd0a45fa43d6f4df9fb89b4659ea10afb',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 900000 }
}))

const config = {
  user: 'sa',
  password: '123',
  server: '192.168.1.35',
  database: 'QR',
  options: {
    encrypt: false,
  },
};

sql.connect(config);




const main = require('./Router/main')
const admin = require('./Router/admin')
const guncelle = require('./Router/guncelle')
const IAdd = require('./Router/IAdd')
const EndAdd = require('./Router/EndAdd')
const push = require('./Router/push')







app.use('/', main)

app.use('/admin', admin)
app.use('/admin/guncelle', guncelle)
app.use('/admin/IAdd', IAdd)
app.use('/admin/endAdd', EndAdd)
app.use('/admin/users', push)











let port = process.env.PORT || 80

app.listen(3000, () => {
  console.log('Server Connect')
})
