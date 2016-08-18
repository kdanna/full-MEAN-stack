// 'use strict'
var express = require('express');
var app     = express();
app.use(express.static('public'));





// start server
app.listen(process.env.PORT || 3000, function () {
 console.log('Express server is running on http://localhost:3000/');
});