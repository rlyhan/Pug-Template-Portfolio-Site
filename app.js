/*
 * Setup of server, routes and middleware
 */

// Require necessary dependencies
const express = require('express');
const router = express.Router();
const { data } = require('./data.json');

// Set up middleware
const app = express();
app.set('view engine', 'pug');
express.static('public');

// Set up routes and start server
router.get('/', (req, res) => {
  // res.locals = data.projects;
});
router.get('/about', (req, res) => {

});
router.post('/project', (req, res) => {

});
// app.get('views/index', (req, res) => {
//   res.render('index');
//   res.locals = data.projects;
// });
// app.get('views/about', (req, res) => {
//   res.render('about');
// });
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

module.exports = router;
