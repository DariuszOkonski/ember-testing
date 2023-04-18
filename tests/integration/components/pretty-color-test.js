/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-testing/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('integration | components | pretty-color', function (hooks) {
  setupRenderingTest(hooks);

  test('should change colors', async function (assert) {
    assert.expect(1);

    this.set('colorValue', 'red');

    await render(hbs`
      <PrettyColor @name={{this.colorValue}} />
    `);

    assert.strictEqual(
      this.element.querySelector('div').getAttribute('style'),
      'color: red'
    );
  });

  test('it renders', async function (assert) {
    assert.expect(2);

    this.set('colorValue', 'red');

    await render(hbs`
      <PrettyColor @name={{this.colorValue}} />
    `);

    assert.strictEqual(
      this.element.querySelector('div').getAttribute('style'),
      'color: red',
      'starts with red'
    );

    this.set('colorValue', 'blue');

    assert.strictEqual(
      this.element.querySelector('div').getAttribute('style'),
      'color: blue',
      'update to blue'
    );
  });

  test('test is renderd properly', async function (assert) {
    assert.expect(2);

    this.set('colorValue', 'red');

    await render(hbs`
      <PrettyColor @name={{this.colorValue}} />
    `);

    assert.strictEqual(
      this.element.querySelector('div').textContent.trim(),
      'Pretty Color:red'
    );

    this.set('colorValue', 'blue');

    assert.strictEqual(
      this.element.querySelector('div').textContent.trim(),
      'Pretty Color:blue'
    );
  });
});
