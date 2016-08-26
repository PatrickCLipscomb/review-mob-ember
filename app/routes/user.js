import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('restaurant');
  },
  actions: {
    createRating(params) {
      var newRating = this.store.createRecord('rating', params);
      var restaurant = params.restaurant;
      restaurant.get('ratings').addObject(newRating);
      newRating.save().then(function() {
        return restaurant.save();
      })
    }
  }
});
