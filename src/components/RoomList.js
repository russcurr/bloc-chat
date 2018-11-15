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



  render() {
    return(
      <section className="chat-rooms">
        {
          this.state.rooms.map( (room, index) =>
          <li className="Rooms" key={index}>
            Room: {index + 1}

          </li>

          )
        }
        <div>
          <h2>Create Room</h2>
            <form className="text-entry" onSubmit={ (e) => this.createNewRoom(e) } onChange={ (e) => this.handleChange(e)}>

              <input  type="text" value={this.state.newRoomName}  />
              <input  type="submit" value="Submit"  />
              </form>
        </div>


      </section>
    );
  }



}

export default RoomList;
