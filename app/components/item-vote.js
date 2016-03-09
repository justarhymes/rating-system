import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    voteUp: function () {
      console.log("voting up");
      this.set('votes', this.get('votes') + 1);
      this.set('up', this.get('up') + 1);
    },
    voteDown: function () {
      console.log("voting down");
      this.set('votes', this.get('votes') - 1);
      this.set('down', this.get('down') + 1);
    }
  }
});
