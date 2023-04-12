/* eslint-disable prettier/prettier */
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SomeThingService extends Service {
  @tracked foo = 'bar';
  @tracked name = 'dariusz';
  @tracked count = 0;

  get computedFoo() {
    return `computed ${this.foo}`;
  }

  get funFoo() {
    return `fun ${this.foo}`;
  }

  get getName() {
    return `welcome ${this.name}`;
  }

  testMethod1() {
    this.foo = 'baz';
  }

  testName() {
    this.name = 'mariusz';
  }

  calc() {
    this.count += 1;
    return `count: ${this.count}`;
  }

  someComplicatedOtherMethod(x) {
    return x * 2;
  }

  calcFull(y) {
    let result = this.someComplicatedOtherMethod(y);
    return `Answer: ${result}`;
  }
}
