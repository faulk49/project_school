class ContactBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: props.contacts ? props.contacts : []
    }
    this.handleContactSubmit = this.handleContactSubmit.bind(this)
  }

  handleContactSubmit (contact) {
    const contacts = this.state.contacts;

    const newContacts = contacts.concat([contact]);
    this.setState({contacts: newContacts})

    $.ajax({
      url: '/contacts',
      type: 'POST',
      dataType: 'json',
      data: {contact: contact},
      success: function(data){
        this.setState({contacts: newContacts});
      }.bind(this)
    })
  }

  render () {
    return (
      <div className='col-sm-6 offset-sm-3'>
        <h1>Contacts</h1>
        <ContactList contacts={this.state.contacts}/>
        <h2>Add New Contact</h2>
        <ContactForm onContactSubmit={this.handleContactSubmit}/>
      </div>
    )
  }
}
