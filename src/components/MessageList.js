import React, { Component } from 'react';
import './MessageList.css'


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

      this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat(message) });
        });
    }






  render() {
    return(
      <section>
        <div>
          <h3>Message List</h3>
            <ul className="MessList">
            {
            this.state.messages.filter(message => message.roomId === this.props.activeRoom.key).map( (message, index) =>
            <div key={index}>
              <li></li>
              <li>{message.username}</li>
              <li>{message.content}</li>
              <li>{message.sentAt}</li>
              <li>{message.roomId}</li>
            </div>
            )
          }
            </ul>

        </div>
      </section>
    )
  }
}




export default MessageList;
