import Ember from 'ember';

export function restaurantRating(params) {
  var restaurant = params[0];
  if (restaurant.get('ratings').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up">');
  } else {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-down">');
  }
}

export default Ember.Helper.helper(restaurantRating);
