import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList'



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
  render() {
    return (
      <div className="App">
        <main>
          <h1>Bloc Chat</h1>
          <RoomList firebase={firebase} />


        </main>

      </div>

    );

  }
}

export default App;
