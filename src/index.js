const express = require('express')
const app = express();
var porta = process.env.PORT || 3000;
var produtoRoute =require('./routes/produtoRoute')
var quadraRoute = require('./routes/quadraRoute')
var caixaRoute = require('./routes/caixaRoute')

const bodyParser = require('body-parser')
const path = require('path')
const flash = require('req-flash')
const session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({secret:'123', resave:true, saveUninitialized:true}))
app.use(flash())

app.set('view engine', 'ejs')
app.set('views','src/views') 

app.use(express.static(path.join("src","public")))

app.use('/admin/produto',produtoRoute)
//app.use('/admin/quadra',quadraRoute)
//app.use('/caixa',caixaRoute)

app.listen(porta)