Activity = React.createClass({
  propTypes: {
    activity: React.PropTypes.object.isRequired
  },
  render() {
    return (
        <li>{this.props.activity.text}</li>
    );
  }
});
