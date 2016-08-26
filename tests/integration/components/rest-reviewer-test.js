import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rest-reviewer', 'Integration | Component | rest reviewer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rest-reviewer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#rest-reviewer}}
      template block text
    {{/rest-reviewer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
