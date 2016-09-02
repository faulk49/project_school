class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {this.props.firstName} {this.props.lastName}
      </div>
    )
  }
}
