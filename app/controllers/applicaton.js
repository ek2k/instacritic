import Ember from 'ember'

export default Ember.Controller.extend({
  sesssion: Ember.inject.service('session')

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
