var express = require('express')
var bodyParser = require('body-parser')
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false})

var app = new express()
// Lang nghe cổng 3000
app.listen(3000,function () {
  console.log('Kết nối thành công')
})

app.get('/', function (req, res) {
  res.send('Trang chu')
})

// Get
app.get('/test', function (req, res) {
  res.send('Dao Dang Son response GET')
})

// Post
app.post('/test', function (req, res) {
  res.send('Dao Dang Son response POST')
})

// Lay du lieu params dang get
app.get('/jobs/:id', function (req, res) {
  var id = req.params.id
  res.send('Id = ' + id)
})

// Lay du lieu phuong thuc post su dung body parser
app.post('/jobs', urlencodedParser, function (req, res) {
  var userName = req.body.username
  var password = req.body.password
  res.send(userName + '/' + password)
})

// Cau hinh template engine
app.set('view engine', 'ejs')

// Set thu muc chua view
app.set('views', './views')

// index.ejs
app.get('/view/index', function (req, res) {
  res.render('index', {hovaten: 'Dao Dang Son', tuoi:26})
})