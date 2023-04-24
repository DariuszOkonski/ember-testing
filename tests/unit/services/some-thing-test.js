/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupTest } from 'ember-testing/tests/helpers';

module('unit | service | some-thing', function (hooks) {
  setupTest(hooks);

  test('should correctly concat foo', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    someThing.foo = 'baz';

    assert.strictEqual(someThing.computedFoo, 'computed baz');
  });

  test('should update foo on updateFoo method', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    someThing.updateFoo();

    assert.strictEqual(someThing.foo, 'baz');
  });

  test('should return incremented count on calc', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    assert.strictEqual(someThing.calc(), 'count: 1');
    assert.strictEqual(someThing.calc(), 'count: 2');
  });

  test('should return number 8 when provided number 4', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    const result = someThing.complicatedMethod(4);

    assert.strictEqual(result, 8);
  });

  test('countAnswer should return result of complicatedMethod', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    const originalComplicatedMethod = someThing.complicatedMethod;

    someThing.complicatedMethod = function () {
      return 4;
    };

    assert.strictEqual(someThing.countAnswer(2), 'Answer: 4');

    someThing.complicatedMethod = originalComplicatedMethod;
  });
});
