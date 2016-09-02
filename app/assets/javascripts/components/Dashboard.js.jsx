class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const dashboard = this.props.dashboard;
    const currentTime = new Date();
    return (
      <div>
        <p>Today- {currentTime.toString()}</p>
        {/*<ContactBox contacts={this.props.dashboard.contacts} />*/}
      </div>
    )
  }
}
