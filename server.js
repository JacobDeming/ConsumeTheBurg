var express = require('express');
var mysql = require('mysql');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var orm = require('./config/orm.js');
var connect = require('connect');
var methodOverride = require('method-override');

var app=express();
var PORT=process.env.PORT||80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'));

app.get('/', function(req, res) {
	orm.selectAll('burgs',function(x){
		console.log(x);
		res.render('index',{x});})});

app.post('/create', function(req, res) {
  	orm.insertData('burgs',req.body.burger,function(x){
  		res.redirect('/');})});

app.put('/update',function(req,res){
	console.log(req.body.id);
	orm.changeData('burgs',req.body.id,function(x){
		res.redirect('/');})})

app.listen(PORT, function(){
	console.log("App is now listening on PORT: "+PORT);});
