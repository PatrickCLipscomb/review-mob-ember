import Ember from 'ember';

export default Ember.Service.extend({
  myRestaurants: [],
  add(restaurant) {
    this.get('myRestaurants').pushObject(restaurant);
  },
  remove(restaurant) {
    this.get('myRestaurants').removeObject(restaurant);
  }
});
