import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var urlSubCommittee = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=' + params.parent_committee_id + '&apikey=7a6b1445457841dc853711413517cbc0';
    return Ember.$.getJSON(urlSubCommittee).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
