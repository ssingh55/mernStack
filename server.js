const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//body parser middle ware
app.use(bodyParser.json());

// Db config
const db = require('./config/keys').mongoURI;

//conect to mongo
mongoose.connect(db,{ useNewUrlParser: true })
.then(()=>console.log('MOngoDb connected'))
.catch(err=>console.log(err));

//Use Routes
app.use('/api/items',items);

const port = process.env.port || 5000;

app.listen(port,()=> console.log(`Server started on port ${port}`));