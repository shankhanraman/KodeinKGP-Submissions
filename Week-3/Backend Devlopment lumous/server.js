const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://shankhanraman:P9XzrcWZKJCsaJrA@cluster0.w6teuvi.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db= mongoose.connection;
db.on('error',(error)=> console.log(error));
db.once('open',()=> console.log('Connected to database,OMG wow'));

const quoteRouter = require('./routes/quote.js');
app.use('/quote',quoteRouter);
app.use('/',(req,res) =>{
    res.send('Hello world');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.listen(5050,()=> console.log('Server started on port 5050'));
