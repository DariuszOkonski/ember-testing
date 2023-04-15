/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-testing/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Components | pretty-color', function (hooks) {
  setupRenderingTest(hooks);

  test('1: should change colors', async function (assert) {
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

  test('2: it renders', async function (assert) {
    assert.expect(2);

    this.set('colorValue', 'orange');

    await render(hbs`
      <PrettyColor @name={{this.colorValue}} />
    `);

    assert.strictEqual(this.element.textContent.trim(), 'Pretty Color:orange');

    this.set('colorValue', 'green');

    assert.strictEqual(this.element.textContent.trim(), 'Pretty Color:green');
  });
});
