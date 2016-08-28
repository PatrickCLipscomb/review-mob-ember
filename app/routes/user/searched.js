import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
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
