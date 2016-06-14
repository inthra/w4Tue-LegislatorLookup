import Ember from 'ember';
  var urlHouse = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=false&apikey=7a6b1445457841dc853711413517cbc0';

  var urlSenate = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=false&apikey=7a6b1445457841dc853711413517cbc0';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      house: Ember.$.getJSON(urlHouse).then(function(responseJSON) {
        return responseJSON.results;
      }),
      senate: Ember.$.getJSON(urlSenate).then(function(responseJSON) {
        return responseJSON.results;
      }),
    });
  },
});
