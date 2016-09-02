class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: ''
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange (e) {
    this.setState({first_name: e.target.value})
  }

  handleLastNameChange (e) {
    this.setState({last_name: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault();
    const first_name = this.state.first_name.trim();
    const last_name = this.state.last_name.trim();

    this.props.onContactSubmit({first_name: first_name, last_name: last_name})
    this.setState({first_name: '', last_name: ''})
  }

  render () {
    return (
      <form className='contactForm' onSubmit={this.handleSubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='First Name'
          value={this.state.first_name}
          onChange={this.handleFirstNameChange}
        />
        <input
          type='text'
          className='form-control'
          placeholder='Last Name'
          value={this.state.last_name}
          onChange={this.handleLastNameChange}
        />
      <input type='submit' value='Add' className='btn btn-success' />
      </form>
    )
  }
}
