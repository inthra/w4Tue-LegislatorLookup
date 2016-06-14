import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var urlBill = 'http://congress.api.sunlightfoundation.com/bills?apikey=7a6b1445457841dc853711413517cbc0';
    return Ember.$.getJSON(urlBill).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
