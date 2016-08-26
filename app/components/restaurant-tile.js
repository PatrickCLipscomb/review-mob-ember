import Ember from 'ember';

export default Ember.Component.extend({
  restList: Ember.inject.service('rest-list'),
  seeReviews: false,
  averageRating: Ember.computed('restaurant.ratings.@each.score', function() {
    var runningScore = 0;
    this.get('restaurant').get('ratings').forEach(function(rating) {
      runningScore += parseInt(rating.get('score'));
    });
    return runningScore / this.get('restaurant').get('ratings').get('length');
  }),
  actions: {
    scoreToggled(choice) {
      this.set('choice', choice);
    },
    createRating() {
      var params = {
        note: this.get('rating.note'),
        author: this.get('rating.author'),
        score: parseInt(this.get('choice')),
        restaurant: this.get('restaurant'),
      };
      this.sendAction('createRating', params);
      this.set('giveRating', false);
    },
    seeReviews() {
      this.toggleProperty('seeReviews');
    },
    addToList(restaurant) {
      this.get('restList').add(restaurant);
    }
  }
});
