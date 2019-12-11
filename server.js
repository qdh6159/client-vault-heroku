const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')
const path = require('path');

require('./db/db');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false
// }));

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS allows requests to come in from React
app.use(cors({
  credentials: true,
  origin: process.env.REACT_ADDRESS
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://client-vault-heroku.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use((req, res, next)=>{
//   console.log(req.session.userId)
//   next()
// })

// Require the controller after the middleware
const clientController = require('./controllers/clientController');
const authController  = require('./controllers/authController');

app.use('/clients', clientController);
app.use('/auth', authController);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
