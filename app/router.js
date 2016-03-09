import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('items', { path: 'i' }, function() {
    this.route('item', { path: ':item_id' }, function() {
      this.route('results');
    });
  });
});

export default Router;
