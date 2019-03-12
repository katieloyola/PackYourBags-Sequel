//boilerplate for node server
var express = require('express');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var db = require("./models");
var PORT = process.env.PORT || 3000;

var app = express()
//when the server is hit, give this page, every time (Static), and give them everything in the public file
app.use(express.static(__dirname + '/public'));

//middleware (bodyParser in express) so we can use the 'long string' attaches the information to 'req' for example
app.use(express.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
//telling it to use handlebars, and my default layout is 'main' - defining it
app.engine('handlebars',exphbs({
    defaultLayout:'main'
}));
//putting it into action- making it so the view is handlebars
app.set('view engine', 'handlebars');

//reference routes.js
//makes routes available (public facing)
var routes = require('./controllers/routes.js');
app.use('/',routes);

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
 });