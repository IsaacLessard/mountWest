var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var app = express();

app.get('/', function (req, res, next) {
  res.json('events')
})

module.exports= router;
