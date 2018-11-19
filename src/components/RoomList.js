import React, { Component } from 'react';
import './RoomList.css'


class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');


  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  createNewRoom(e) {
    this.roomsRef.push({
        name: this.state.newRoomName
    });
    this.setState({ newRoomName: ''})
  }

  handleSubmit(e) {
    this.setState({newRoomName: e.target.value})
  }

  handleClick(room) {
    this.props.setActiveRoom(room);
  }


  render() {
    return(
      <section>
        <div>
          <h2>Create Room</h2>
            <form  onSubmit={ (e) => this.createNewRoom(e) } >

              <input  className="text-entry" type="text" value={this.state.newRoomName}
              placeholder="Create New Room" onChange={ (e) => this.handleSubmit(e)} />
              <input  className="submission" type="submit" value="Submit"  />
            </form>
        </div>

        <div className="chat-rooms">
          {
          this.state.rooms.map( (room, index) =>
          <li className="Rooms" key={index} onClick={() => this.handleClick(room)}>
             {room.name}

          </li>

            )
          }
        </div>
        <div>

        </div>



      </section>
    );
  }



}

export default RoomList;
