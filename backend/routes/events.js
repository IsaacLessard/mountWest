var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var app = express();

function Events() {
  return knex('events')
}

app.get('/', function (req, res, next) {
  Events().select().then(function(events) {
    res.json(events)
  })
})
