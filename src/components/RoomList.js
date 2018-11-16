import React, { Component } from 'react';
import './RoomList.css'


class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ''
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
    const newRoomName= this.state.newRoomName;
    this.roomsRef.push({
        name: newRoomName
    });
  }

  handleChange(e) {
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
            <form  onSubmit={ (e) => this.createNewRoom(e) } onChange={ (e) => this.handleChange(e)} >

              <input  className="text-entry" type="text" value={this.state.newRoomName} placeholder="Create New Room"  />
              <input  className="submission" type="submit" value="Submit"  />
            </form>
        </div>

        <div className="chat-rooms">
          {
          this.state.rooms.map( (room, index) =>
          <li className="Rooms" key={index} onClick={() => this.props.setActiveRoom(room)}>
            Room: {index + 1}

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
