import React, { Component } from 'react';


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



  render() {
    return(
      <section>
        {
          this.state.rooms.map( (room, index) =>
          <li className="Rooms" key={index}>
            Room: {index + 1}

          </li>

          )
        }
        <section>
          <form>
            <h1>Create Room</h1>
            <input type="text" />
            <input type="submit" value="Submit" onSubmit={ (e) => this.createNewRoom(e) } />
          </form>
        </section>


      </section>
    );
  }



}

export default RoomList;
