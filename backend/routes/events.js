var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg')
var app = express();

//
router.get('/', function (req, res, next) {
  knex.from('event').innerJoin('client','event.client_id', 'clientiid')
})

router.get('/:id', function (req, res, next) {
  Events().select().where('id', req.params.id).then()
})

module.exports = router;
