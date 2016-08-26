import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cuisine: DS.attr(),
  image: DS.attr(),
  ratings: DS.hasMany('rating', {async: true})
});
