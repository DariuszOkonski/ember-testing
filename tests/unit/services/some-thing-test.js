/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupTest } from 'ember-testing/tests/helpers';

module('unit | services | some-thing', function (hooks) {
  setupTest(hooks);

  test('should be able to change foo state', function (assert) {
    const testSomeThing = this.owner.lookup('service:some-thing');

    testSomeThing.foo = 'baz';

    assert.strictEqual(testSomeThing.foo, 'baz');
  });

  test('should be able to chang count state', function (assert) {
    const testSomeThing = this.owner.lookup('service:some-thing');

    testSomeThing.count = 1;

    assert.strictEqual(testSomeThing.count, 1);
  });

  test('should correctly concat foo', function (assert) {
    const testSomeThing = this.owner.lookup('service:some-thing');

    testSomeThing.foo = 'baz';

    assert.strictEqual(testSomeThing.computedFoo, 'computed baz');
  });

  test('should update foo on updateFoo method', function (assert) {
    const testSomeThing = this.owner.lookup('service:some-thing');

    testSomeThing.updateFoo();

    assert.strictEqual(testSomeThing.foo, 'baz');
  });

  test('should return incremented count on calc', function (assert) {
    const testSomeThing = this.owner.lookup('service:some-thing');

    testSomeThing.count = 1;

    assert.strictEqual(testSomeThing.calc(), 'count: 2');
    assert.strictEqual(testSomeThing.calc(), 'count: 3');
  });

  test('should return number 8 when provided number 4 to complicatedMethos', function (assert) {
    const testSomeThing = this.owner.lookup('service:some-thing');

    const result = testSomeThing.complicatedMethod(4);

    assert.strictEqual(result, 8);
  });

  test('countAnswer should return result of complicatedMethod', function (assert) {
    const testSomeThing = this.owner.lookup('service:some-thing');
    const originalComplicatedMethod = testSomeThing.complicatedMethod;

    testSomeThing.complicatedMethod = function () {
      return 4;
    };

    assert.strictEqual(testSomeThing.countAnswer(2), 'Answer: 4');

    testSomeThing.complicatedMethod = originalComplicatedMethod;
  });
});
