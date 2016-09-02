class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const contacts = this.props.contacts.map( (contact,i) =>
     <Contact key={i} firstName={contact.first_name} lastName={contact.last_name} />)

    return (
      <div>
        {contacts}
      </div>
    )
  }
}
