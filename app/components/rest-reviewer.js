import Ember from 'ember';

export default Ember.Component.extend({
  choice: null,
  actions: {
    scoreToggled(choice) {
      this.set('choice', choice);
    },
    createRating(restaurant) {
      var params = {
        note: this.get('note'),
        author: this.get('author'),
        score: parseInt(this.get('choice')),
        restaurant: this.get('model'),
      };
      this.sendAction('createRating', params);
      this.set('giveRating', false);
    }
  }
});
