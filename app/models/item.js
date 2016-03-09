import Ember from 'ember';

export default Ember.Object.extend({
  joinUpDown: Ember.computed.collect('up', 'down'),
  voteTotal: Ember.computed.sum('joinUpDown')
});
