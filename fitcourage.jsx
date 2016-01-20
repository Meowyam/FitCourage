Activities = new Mongo.Collection("activities");

if (Meteor.isClient) {

  Meteor.startup(function() {
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}
