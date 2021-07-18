// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
const noteData = require('../data/note');
const router = require('express').Router();

// ROUTING
// module.exports = (router) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  router.get('/api/note', (req, res) => res.json(noteData));

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the routerropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
  router.post('/api/note', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a note
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
      noteData.push(req.body);
      res.json(true);
  });
  module.exports = router;

// };