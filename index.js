const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();
// use express router
app.use(express.urlencoded());
app.use('/',require('./routes'))

//setup the view engine
app.set('view engine','ejs');

app.set('views','./views');

app.use(express.static('assets'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port ${port}`);
})

