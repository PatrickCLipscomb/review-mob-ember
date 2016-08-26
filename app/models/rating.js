import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  score: DS.attr(),
  note: DS.attr(),
  restaurant: DS.belongsTo('restaurant', {async: true})
});
