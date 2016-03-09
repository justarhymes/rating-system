import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findItemById(params.item_id);
  },

  store: Ember.inject.service()
});
