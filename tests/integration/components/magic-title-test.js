/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-testing/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Components | magic-title', function (hooks) {
  setupRenderingTest(hooks);

  test('1: should update title on button click', async function (assert) {
    assert.expect(2);

    await render(hbs`<MagicTitle />`);

    assert.strictEqual(
      this.element.querySelector('h2').textContent.trim(),
      'Hello World',
      'initial text is hello world'
    );

    await click('.title-button');

    assert.strictEqual(
      this.element.querySelector('h2').textContent.trim(),
      'This is Magic',
      'title changes after click'
    );
  });
});
