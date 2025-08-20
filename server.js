const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('<placeholder-for-mongodb-connection-string>');

app.get('/api/problems', async (req, res) => {

});

app.listen(5000, ()=> console.log('Server is running on port 5000'));

