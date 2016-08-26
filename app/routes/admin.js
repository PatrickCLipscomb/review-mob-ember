import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('restaurant');
  },
  actions: {
    createRest(params) {
      var newRest = this.store.createRecord('restaurant', params);
      newRest.save()
    }
  }
});
