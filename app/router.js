import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('user', function() {
    this.route('searched', {path: '/:restaurant_id'});
  });
  this.route('restaurant', {path: '/restaurant/:restaurant_id'});
  this.route('myRests');
});

export default Router;
