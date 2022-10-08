const port = 3005

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bcrypt = require('bcrypt')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.post("/api/signup/", async (req, res) => {
  try{
    const hashed_password = await bcrypt.hash(req.body.password, 10)
    console.log("password:", password, "hashed password:", hashed_password)
    res.send({
      yourpass: hashed_password
    })
  } catch(e) {
    console.trace(e)
    res.send().status(500)
  } 
})

app.get('/', function(req, res, next){
  res.send({
    text: "bob"
  }).status(200)
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
