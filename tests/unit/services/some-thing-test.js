/* eslint-disable prettier/prettier */
import { module, skip, test } from 'qunit';
import { setupTest } from 'ember-testing/tests/helpers';

module('Unit | Service | some thing', function (hooks) {
  setupTest(hooks);

  test('should correctly concat foo', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');
    someThing.foo = 'baz';

    assert.strictEqual(someThing.computedFoo, 'computed baz');
  });

  test('should check funFoo', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');
    someThing.foo = 'welcome';

    assert.strictEqual(someThing.funFoo, 'fun welcome');
  });

  test('should welcom you', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');
    someThing.name = 'john';

    assert.strictEqual(someThing.getName, 'welcome john');
  });

  test('should test testMethod1', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    someThing.testMethod1();

    assert.strictEqual(someThing.foo, 'baz');
  });

  skip('should test method testName', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    someThing.testName();

    assert.strictEqual(someThing.name, 'mariusz');
  });

  test('should test method calc', function (assert) {
    const someThing = this.owner.lookup('service:some-thing');

    assert.strictEqual(someThing.calc(), 'count: 1');
    assert.strictEqual(someThing.calc(), 'count: 2');
    assert.strictEqual(someThing.calc(), 'count: 3');
  });
});
