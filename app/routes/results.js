import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=7a6b1445457841dc853711413517cbc0&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
