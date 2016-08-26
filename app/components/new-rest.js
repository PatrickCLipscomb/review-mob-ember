import Ember from 'ember';

export default Ember.Component.extend({
  updateRestaurants: false,
  actions: {
    createRest() {
      var params = {
        name: this.get('name'),
        cuisine: this.get('cuisine'),
        image: this.get('image')
      };
      this.sendAction('createRest', params)
      this.set('name', '')
      this.set('cuisine', '')
      this.set('image', '')
    },
    updateRestaurants() {
      this.set('updateRestaurants', true);
    },
    saveUpdate(restaurant) {
      restaurant.save();
    },
    updateRestaurantsDone() {
      this.set('updateRestaurants', false);
    }
  }
});
