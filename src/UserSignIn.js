import React, { Component } from 'react';

class UserSignIn extends Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleSignIn = (e) => {
    e.preventDefault();
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    console.log('Username:', username);
    console.log('Password:', password);
  };

  render() {
    return (
      <div className="user-signin">
        <h2>User Sign In</h2>
        <form onSubmit={this.handleSignIn}>
          <div>
            <label>Username: </label>
            <input type="text" ref={this.usernameRef} />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" ref={this.passwordRef} />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default UserSignIn;