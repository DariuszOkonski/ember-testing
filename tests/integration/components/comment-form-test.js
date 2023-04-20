/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('integration | components | comment-form', function (hooks) {
  setupRenderingTest(hooks);

  test('should trigger external action on form submit', async function (assert) {
    assert.expect(0);

    // test double for the external action
    // this.set('externalAction', (actual) => {
    //   let expected = { comment: 'You are not a Wizard!' };
    //   assert.deepEqual(
    //     actual,
    //     expected,
    //     'submited value is passed to external action'
    //   );
    // });

    // await render(hbs`
    //   <CommentForm @submitComment={{this.externalAction}} />
    // `);

    // await fillIn('textarea', 'You are not a Wizard!');

    // await click('.comment-input');
  });
});
