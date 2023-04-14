/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupTest } from 'ember-testing/tests/helpers';

module('Unit | Service | some-thing', function (hooks) {
  setupTest(hooks);

  test('1: should change value of foo', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    someThing.foo = 'baz';

    assert.strictEqual(someThing.foo, 'baz');
  });

  test('2: should get computedFoo', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    someThing.foo = 'baz';

    assert.strictEqual(someThing.computedFoo, 'computed baz');
  });

  test('3: should change foo value by calling getFoo method', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');
    const originalGetFoo = someThing.getFoo;

    someThing.getFoo = function () {
      this.foo = 'dazz';
    };

    someThing.foo = 'test1';
    assert.strictEqual(someThing.foo, 'test1');

    someThing.getFoo();
    assert.strictEqual(someThing.foo, 'dazz');

    someThing.getFoo = originalGetFoo;
  });

  test('4: should change value of count', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    someThing.count = 1;
    assert.strictEqual(someThing.count, 1);
    someThing.count = 2;
    assert.strictEqual(someThing.count, 2);
  });

  test('5: should return proper value of count by using calc method', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    someThing.count = 10;
    assert.strictEqual(someThing.calc(), 'count: 11');
    assert.strictEqual(someThing.calc(), 'count: 12');
  });

  test('6: should return proper value of multiplyByTwo method', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    let result = someThing.multiplyByTwo(2);
    assert.strictEqual(result, 4);
    result = someThing.multiplyByTwo(result);
    assert.strictEqual(result, 8);
  });

  test('7: should return proper value of getMultiplyByTwoRespons method', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');
    const originalMultiplyByTwo = someThing.multiplyByTwo;

    someThing.multiplyByTwo = function () {
      return 4;
    };

    assert.strictEqual(someThing.getMultiplyByTwoResponse(2), 'Answer: 4');

    someThing.multiplyByTwo = originalMultiplyByTwo;
  });
});
