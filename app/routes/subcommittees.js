import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&subcommittee=true&parent_committee_id=' + params.parent_committee_id + '&apikey=7a6b1445457841dc853711413517cbc0';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
