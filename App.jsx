App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      activities: Activities.find({}).fetch()
    }
  },

  renderActivities() {
    return this.data.activities.map((activity) => {
      return <Activity key={activity._id} activity={activity} />;
    });
  },

  render() {
    return (
        <div className="container">
          <header>
            <h1>Activities</h1>
          </header>

          <ul>
            {this.renderActivities()}
          </ul>
        </div>
    );
  }
});
