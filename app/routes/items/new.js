import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    makeItem(item) {
      this.get('store').makeItem(item);
      this.transitionTo('items.item', item);
    }
  },

  model() {
    return this.get('store').newItem();
  },

  store: Ember.inject.service()
});
