const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database/db');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const PORT = 8000;
const app = express()

app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:8000'],
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
