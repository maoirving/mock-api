const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// 设置跨域和相应数据格式
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  )
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

// set CURRENT_PROJECT
const CURRENT_PROJECT = 'parfuma'

const commonRouter = {
  geocode: require('./routes/common/geocode'),
}
app.use('/mock/geocode', commonRouter.geocode)

if (CURRENT_PROJECT === 'bouwmaat') {
  // bouwmaat
  const bouwmaatRouters = {
    cart: require('./routes/bouwmmat/cart'),
  }
  app.use('/mock/bouwmaat/cart', bouwmaatRouters.cart)
} else if (CURRENT_PROJECT === 'parfuma') {
  // parfuma
  const parfumaRouters = {
    content: require('./routes/parfuma/content'),
    products: require('./routes/parfuma/products'),
    webNodes: require('./routes/parfuma/webnodes'),
    stores: require('./routes/parfuma/stores'),
  }
  app.use('/mock/vm/u', parfumaRouters.content)
  app.use('/mock/products', parfumaRouters.products)
  app.use('/mock/webnodes', parfumaRouters.webNodes)
  app.use('/mock/stores', parfumaRouters.stores)
} else {
  // todo
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
