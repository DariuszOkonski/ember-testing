/* eslint-disable prettier/prettier */
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SomeThingService extends Service {
  @tracked foo = 'bar';

  get computedFoo() {
    return `computed ${this.foo}`;
  }
}
