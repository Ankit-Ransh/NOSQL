const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URL).
then(() => console.log('Mongo Connected'))
.catch((error) => console.log(error));

app.listen(PORT, () => {
    console.log('Server started')
});