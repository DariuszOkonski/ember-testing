/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupTest } from 'ember-testing/tests/helpers';

module('unit | service | employees', function (hooks) {
  setupTest(hooks);

  test('hire adds a person to employees array', function (assert) {
    const testEmployees = this.owner.lookup('service:employees');

    class MockPerson {
      title = 'Dr.';
      name = 'Zoey';
      addJob() {}
    }

    const testPerson = new MockPerson();

    assert.strictEqual(
      testEmployees.hire(testPerson),
      'Dr. Zoey is now en employess'
    );
  });
});
