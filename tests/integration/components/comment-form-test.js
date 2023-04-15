/* eslint-disable prettier/prettier */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-testing/tests/helpers';
import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | comment-form', function (hooks) {
  setupRenderingTest(hooks);

  // SOMETHING IS BROKEN HERE

  test('1: should trigger external action on form submit', async function (assert) {
    assert.expect(0);

    // test double for the external action
    this.set('externalAction', (actual) => {
      let expected = { comment: 'You are not wizard!' };
      assert.deepEqual(
        actual,
        expected,
        'submited value is passed to external action'
      );
    });

    await render(hbs`<CommentForm @submitComment={{this.externalAction}} />`);

    // fill out the form and force on change
    await fillIn('textarea', 'You are not a wizard!');

    // await click('.comment-input');
  });
});
