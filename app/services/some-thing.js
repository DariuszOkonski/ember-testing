/* eslint-disable prettier/prettier */
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SomeThingService extends Service {
  @tracked foo = 'bar';
  @tracked count = 0;

  get computedFoo() {
    return `computed ${this.foo}`;
  }

  updateFoo() {
    this.foo = 'baz';
  }

  calc() {
    this.count += 1;
    return `count: ${this.count}`;
  }

  complicatedMethod(number) {
    return number * 2;
  }

  countAnswer(number) {
    let complicatedResult = this.complicatedMethod(number);

    return `Answer: ${complicatedResult}`;
  }
}
