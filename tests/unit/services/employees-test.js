/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupTest } from 'ember-testing/tests/helpers';

module('Unit | Service | employees', function (hooks) {
  setupTest(hooks);

  test('1: should check number of employees in array', function (assert) {
    const employee = this.owner.lookup('service:employees');

    employee.employees = [];
    assert.strictEqual(employee.employees.length, 0);

    const person = {};
    employee.employees.push(person);
    assert.strictEqual(employee.employees.length, 1);
  });

  test('2: should check hire method if returning proper string', function (assert) {
    const employee = this.owner.lookup('service:employees');

    class Person {
      title = 'Dr.';
      name = 'Trevor';
      addJob() {}
    }

    const person = new Person();

    assert.strictEqual(employee.hire(person), 'Dr. Trevor is now an employee');
  });
});
