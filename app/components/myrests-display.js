import Ember from 'ember';

export default Ember.Component.extend({
  restList: Ember.inject.service(),
  actions: {
    removeRestaurant(restaurant) {
      this.get('restList').remove(restaurant);
    }
  }
});
