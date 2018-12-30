/*
 * Setup of server, routes and middleware
 */

/*
 * Require necessary dependencies
 */
const express = require('express');
const data = require('./data.json');

/*
 * Creates Express application
 */
const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

/*
 * Renders the index page
 */
app.get('/', (req, res) => {
  res.locals = data.projects;
  res.render('index', {
    projects: res.locals
  });
});

/*
 * Renders the about page
 */
app.get('/about', (req, res) => {
  res.render('about');
});

/*
 * Renders a project page based on the id of the project clicked
 */
app.get('/project_:id', (req, res) => {
  res.locals = data.projects;
  res.render('project', {
    project: res.locals[req.params.id]
  });
});

/*
 * Sets up error message and status
 */
app.use((req, res, next) => {
  const err = new Error('The page you are looking for does not exist.');
  err.status = 404;
  next(err);
});

/*
 * Renders the error page
 */
app.use((err, req, res, next) => {
  res.locals.error = err;
  console.log('Error: The page you are looking for does not exist.');
  res.render('error');
});

/*
 * Make the application run on port 3000
 */
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
