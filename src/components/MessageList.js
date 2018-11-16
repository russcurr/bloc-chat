import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        messages: [],
        username: "",
        content: "",
        roomId: "",
        sentAt: ""
    };

      this.roomsRef = this.props.firebase.database().ref('messages');
  }





  render() {
    return(
      <section>
        <div>List the Chat Rooms
        <li> onClick={() => this.props.setActiveRoom(room)} </li>
        </div>
      </section>
    )
  }
}




export default MessageList;
