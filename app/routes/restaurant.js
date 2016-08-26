import Ember from 'ember';

export default Ember.Route.extend({
  choice: null,
  model(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
  },
  actions: {
    scoreToggled(choice) {
      this.set('choice', choice);
    },
    createRating(restaurant) {
      var params = {
        note: this.get('rating.note'),
        author: this.get('rating.author'),
        score: parseInt(this.get('choice')),
        restaurant: this.get('restaurant'),
      };
      this.sendAction('createRating', params);
      this.set('giveRating', false)
    }
  }
});
