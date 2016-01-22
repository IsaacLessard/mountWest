var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg')
var app = express();

//
router.get('/', function (req, res, next) {
// returnObject ={}
  knex.from('event').innerJoin('client','event.client_id', 'client.id').innerJoin('employee', 'event.employee_id', 'employee.id').innerJoin('feedback', 'event.feedback_id', 'feedback.id')
  .then(function(events){
    res.json(events)
  })
})


// router.get('/:id', function (req, res, next) {
//   Events().select().where('id', req.params.id).then()
// })

module.exports = router;
