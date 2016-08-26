import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createRating(params) {
      this.sendAction('createRating', params);
    },
  }
});
