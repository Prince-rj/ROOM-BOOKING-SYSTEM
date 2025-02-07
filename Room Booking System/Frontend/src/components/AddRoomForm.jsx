import {useState} from 'react'
import './CSS/AddRoomForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router';
function AddRoomForm(props){
    const Navigate=useNavigate()
    const [userName,setUserName]=useState('');
    const [roomName,setRoomName]=useState('');
    const [roomAddress,setRoomAddress]=useState('');
    const [roomPrice,setRoomPrice]=useState('');
    const [roomDescription,setRoomDescription]=useState('');
    const [roomType,setRoomType]=useState('');
    const [image,setImage]=useState([]);
    const changeHandlerImage=(e)=>{
        setImage([...e.target.files])
        console.log(image)
    }
    const userNameChangeHandler=(e)=>{
        setUserName(e.target.value)
        console.log(userName)
    }
    const roomNameChangeHandler=(e)=>{
        setRoomName(e.target.value)
        console.log(roomName)
    }
    const roomAddressChangeHandler=(e)=>{
        setRoomAddress(e.target.value)
        console.log(roomAddress)
    }
    const roomPriceChangeHandler=(e)=>{
        setRoomPrice(e.target.value)
        console.log(roomPrice)
    }
    const roomDescriptionChangeHandler=(e)=>{
        setRoomDescription(e.target.value)
        console.log(roomDescription)
    }
    const roomTypeChangeHandler=(e)=>{
        setRoomType(e.target.value)
        console.log(roomType)
    }
    
const data={
        name: userName,
        email: props.email,
        roomName:roomName,
        roomAddress : roomAddress,
        roomPrice : roomPrice,
        roomDescription : roomDescription,
        roomType : roomType,
        roomImage:image
}
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(data)
        console.log(data.roomImage)
        axios
          .post("http://localhost:2000/addroomsubmit", data,{
            headers:{'Content-Type':'multipart/form-data'}
          })
          .then((res) => {
            
            
            Navigate('/')
            
          })
          .catch((err) => {
            console.log(err);
          });
      };
    

    return (
        <>
        <h1 id='add-room-header'>ADD YOUR ROOM</h1>
        <form action="" method="post" encType="multipart/form-data" id="add-room-form">
            <label htmlFor="user-name" id="user-name-label">User Name : </label>
            <input onChange={userNameChangeHandler} className='input-room' type="text" id="user-name" name="user-name"/> 

            <label htmlFor="room-name" id="room-name-label">Room Name : </label>
            <input onChange={roomNameChangeHandler} className='input-room' type="text" id="room-name" name="room-name"/> 

            <label htmlFor="room-address" id="room-address-label">Address : </label>
            <input onChange={roomAddressChangeHandler} className='input-room' type="text" id="room-address" name="room-address"/> 

            <label htmlFor="room-price" id="room-price-label">Price : </label>
            <input max='100000' onChange={roomPriceChangeHandler} className='input-room' type="number" id="room-price" name="room-price"/>

            <label htmlFor="room-description" id="room-description-label">Description : </label>
            <input onChange={roomDescriptionChangeHandler} className='input-room' type="text" id="room-description" name="room-description"/>

            <label htmlFor="room-type" id="room-type-label">Room Type</label>
            <input onChange={roomTypeChangeHandler} className='input-room-radio' type="radio" name="room-type" id="room-type" value='Lodging'/>Lodging
            <input onChange={roomTypeChangeHandler} className='input-room-radio' type="radio" name="room-type" id="room-type" value='Rent' />Rent

            <label htmlFor="upload-image" id="upload-image-label">Upload Images : </label>
            <input multiple='multiple' onChange={changeHandlerImage} className='input-room' accept='image/*' type="file"  id="upload-image"/>

            <button id="room-submit-btn" onClick={onSubmitHandler}>submit</button>
        </form>
        </>
    )
}

export default AddRoomForm