import React, { Component } from 'react';


class User extends Component {
  constructor(props) {
    super(props);
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    })
  }


  render(){
    return(
      <div>
        <button className="sign-in" onClick={this.handleSignIn.bind(this)}>Sign In</button>
        <button className="sign-out" onClick={this.handleSignOut.bind(this)}>Sign Out</button>
      </div>
    )
  }
}

export default User;