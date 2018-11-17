import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';




  var config = {
    apiKey: "AIzaSyBAD2doKHMc-w0sn48SQ8bO-wqPJQIYEDA",
    authDomain: "bloc-chat-236db.firebaseapp.com",
    databaseURL: "https://bloc-chat-236db.firebaseio.com",
    projectId: "bloc-chat-236db",
    storageBucket: "bloc-chat-236db.appspot.com",
    messagingSenderId: "981758313395"
  };
  firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeRoom: ""
      };
      this.setActiveRoom = this.setActiveRoom.bind(this);
    }

    setActiveRoom(room) {
      this.setState({
        activeRoom: room,
      });
    }


  render() {
    return (
      <div className="App">
        <main>
          <h1>Bloc Chat</h1>
          <section className="col-sm-4">
            <RoomList  firebase={firebase}
            setActiveRoom={this.setActiveRoom.bind(this)}
            />
          </section>
          <section className="col-sm-8">
            <MessageList  firebase={firebase}
            activeRoom={this.state.activeRoom}
            />
          </section>


        </main>

      </div>

    );

  }
}

export default App;
