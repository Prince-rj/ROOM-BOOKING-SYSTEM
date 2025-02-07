import './CSS/AddRoom.css'
import React from 'react';
import {useNavigate} from 'react-router-dom'
function AddRoom(props) {
  const navigate=useNavigate();
  const clickHandler=(e)=>{
      navigate('/addroom')
  }
    return (
      <button onClick={clickHandler} id='add-room'>
        <span id='add-room-text'>Add Room</span>
      </button>
    )
}

export default AddRoom
