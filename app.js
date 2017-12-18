const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected',function () {
    console.log('Connected to database'+config.database);
});
mongoose.connection.on('error',function (err) {
    console.log('Database error'+err);
});

const app = express();

const users = require('./routes/users');
const strategies = require('./routes/strategies');
const projects = require('./routes/projects');

const port = process.env.PORT || 8080;

//cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
app.use('/strategies',strategies);
app.use('/projects',projects);

app.get('/',function (req,res) {
    res.send('Invalid Endpoint');
});

app.get('*',function (req,res) {
    res.sendFile(path.join(__dirname,'public/index.html'))
});

app.listen(port, function () {
    console.log('Server started on port' + port);
});