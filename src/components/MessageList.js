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
        sentAt: "",
        newMessage: "",

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

  createNewMessage(e) {
    this.messagesRef.push({
        content: this.state.newMessage,
        username: this.props.user ? this.props.user.displayName: "Guest",
        roomId: this.props.activeRoom.key,
        sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
    });
    this.setState({newMessage: ''})
  }

  handleSubmit(e) {
    this.setState({ newMessage: e.target.value });
  }









  render() {
    return(
      <section>
        <div>
          <h3>Message List</h3>
            <div className="MessList">
            {
            this.state.messages.filter(message => message.roomId === this.props.activeRoom.key).map( (message, index) =>
            <div key={index}>
              <p>{message.username}</p>
              <p>{message.content}</p>
              <p>{message.sentAt}</p>
              <p>{message.roomId}</p>
            </div>
            )
          }
            </div>


            <form className="submit-message" onSubmit={(e) => this.createNewMessage(e)} >
              <input type="text" placeholder="New Message" value={this.state.newMessage}
               onChange={(e) => this.handleSubmit(e)} />
              <input type="submit" value="Send" />
            </form>
          

        </div>
      </section>
    )
  }
}




export default MessageList;
