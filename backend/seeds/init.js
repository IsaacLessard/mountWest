
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('employee').insert({
      first_name: "Jon",
      last_name: "Casey"
    }),
    knex('client').insert({
      name: "Band In The Park",
      phone: "303-303-3033",
      contact_name: "Stacey Sullivan",
      email: "stacey@bitp.org",
    }),
    knex('client').insert({
      name: "Music Jubilee",
      phone: "303-303-3033",
      contact_name: "Dan Smith",
      email: "dannyboy@musicjubilee.org",
    }),
    knex('client').insert({
      name: "City of Denver",
      phone: "303-303-3033",
      contact_name: "John Hancock",
      email: "jhancock@denver.org",
    }),
    knex('feedback').insert({
      rating: 5,
      arrive_early: true,
      set_up: true,
      confidence: 4,
      satisfaction: 5,
      value: 5,
      comments: "Place is rockin.",
      other_events: "Nothin.",
    }),
    knex('feedback').insert({
      rating: 5,
      arrive_early: true,
      set_up: true,
      confidence: 4,
      satisfaction: 5,
      value: 5,
      comments: "Killin' it.",
      other_events: "My buddy Steve has a backyard wrestling tournament coming up.",
    }),
    knex('feedback').insert({
      rating: 5,
      arrive_early: true,
      set_up: true,
      confidence: 4,
      satisfaction: 5,
      value: 5,
      comments: "I love you, so much.",
      other_events: "Nothin.",
    })
  ]).then(function(){
    return Promise.all([
      knex('event').insert({
        client_id: 1,
        employee_id: 1,
        feedback_id: 1,
      }),
      knex('event').insert({
        client_id: 2,
        employee_id: 1,
        feedback_id: 2,
      }),
      knex('event').insert({
        client_id: 3,
        employee_id: 1,
        feedback_id: 3,
      })
    ])
  })
};
