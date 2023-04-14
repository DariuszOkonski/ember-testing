/* eslint-disable prettier/prettier */
import Service from '@ember/service';

export default class EmployeesService extends Service {
  employees = [];

  hire(person) {
    person.addJob();
    this.employees.push(person);
    return `${person.title} ${person.name} is now an employee`;
  }
}
