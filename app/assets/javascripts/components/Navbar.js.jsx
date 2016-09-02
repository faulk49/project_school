class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const userName = this.props.current_user ? this.props.current_user.first_name : 'Guest'
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className='nav navbar-nav'>
        <a href='#' className='nav-item nav-link active'>{userName}</a>
        {this.props.current_user ?
          <div>
          <a href='#' className='nav-item nav-link'>Contacts</a>
          <a href='/users/sign_out' className='nav-item nav-link' data-method='delete'>Sign out</a>
          </div>
          : null
        }
        </div>
      </nav>
    )
  }
}
