const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use('/reset', serveStatic(path.join(__dirname, '/dist')))
app.use('/register', serveStatic(path.join(__dirname, '/dist')))
app.use('/home', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/dashboard', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/accounts', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/account/new', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/settings', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/faqs', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/universityinfo', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/reviews', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/department', serveStatic(path.join(__dirname, '/dist')))
app.use('/home/organization', serveStatic(path.join(__dirname, '/dist')))
app.use('/account/reset', serveStatic(path.join(__dirname, '/dist')))
app.use('/account/department', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

