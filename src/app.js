const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();

const app = express();

const post = process.env.POST || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine','ejs');

const htmlFile = path.join(__dirname, "../views");
app.set('views', htmlFile);

app.listen(post, (req, res) => console.log("server is running..."));

app.get('/', (req, res) => {
    res.render('index');
})