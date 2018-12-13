const controller = require('../controllers/controller');
const db = require('../models');

module.exports = app => {
  
  app.post('/api/user', controller.handleUser);

  app.post('/api/update-maxes', controller.updateMaxes);

  app.get('/api/settings/:id', controller.fetchSettings);

  app.post('/api/update-settings/:id', controller.updateSettings);

  app.post('/api/userMaxes', controller.fetchUserMaxes);


  app.post('/api/workout', controller.postWorkout);

  //   app.get('/api/accessory-lifts/:id', controller.updateAccLifts);

}