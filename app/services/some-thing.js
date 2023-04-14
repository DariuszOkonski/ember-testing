/* eslint-disable prettier/prettier */
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SomeThingService extends Service {
  @tracked foo = 'bar';
  @tracked count = 0;

  get computedFoo() {
    return `computed ${this.foo}`;
  }

  getFoo() {
    this.foo = 'baz';
  }

  calc() {
    this.count += 1;
    return `count: ${this.count}`;
  }

  multiplyByTwo(number) {
    return number * 2;
  }

  getMultiplyByTwoResponse(number) {
    let result = this.multiplyByTwo(number);
    return `Answer: ${result}`;
  }
}
