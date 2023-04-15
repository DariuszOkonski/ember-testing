/* eslint-disable prettier/prettier */
import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-testing/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

// Stub location service
class LocationStub extends Service {
  city = 'New York';
  country = 'USA';
  currentLocation = {
    x: 1234,
    y: 5678,
  };

  getCurrentCity() {
    return this.city;
  }

  getCurrentCountry() {
    return this.country;
  }
}

module('Integration | Components | location-indicator', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (assert) {
    this.owner.register('service:location-service', LocationStub);
  });

  skip('should reveal current location', async function (assert) {
    await render(hbs`<LocationIndicator />`);
    assert.strictEqual(
      this.element.textContent.trim(),
      'You currently are located in New York, USA'
    );
  });
});
