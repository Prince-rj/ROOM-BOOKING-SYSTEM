import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import "./CSS/RoomInfo.css";
import { useNavigate } from "react-router-dom";
function RoomInfo(props) {
  const navigate = useNavigate();
  const bookClickHandler=()=>{
    navigate('/book')
  }
  const nameClickHandler = () =>{
    console.log('room info button clicked');
    console.log(props.data)
    props.setProfileName(props.data.name);
    props.setProfileEmail(props.data.email);
    navigate('/roomprofile')
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const price= props.data.roomPrice
  const tax= price*0.18;

  return (
    <div id="room-container">
      <div id="room-info">
        <div id="room-photo">
        {
            (props.data.roomImage.length==1)?
            <img id='room-image-single' src={props.data.roomImage[0]}></img>
            :
          <Slider {...settings}>
          {
              props.data.roomImage.map(img=>{
              return (
                <img
                  id="room-info-image"
                  key={img}
                  height="500px"
                  width="600px"
                  src={`${img}`}
                  alt="image"
                />
              )
              })
            }
           
          </Slider>
}
        </div>
        <div id="room-info-details">
          <span className="font-card" id="name">
            {props.data.roomName}
          </span>
          <span className="font-card" id="Address">
            {props.data.roomAddress}
          </span>
          <span className="font-card" id="Address">
            
          </span>

          <div id="Booking-details" className="font-card">
            <div className="price">
              <span>Price : </span>
              <span id="value">{price}</span>
            </div>
            <div className="price">
              <span>Tax : </span>
              <span id="value">{tax}</span>
            </div>
            <div className="room-info-total price">
              <span>Total : </span>
              <span id="value">{price+tax}</span>
            </div>
            <hr/>
            <button onClick={bookClickHandler} id="btn-id">Book</button>
          </div>
        </div>
      </div>
      <div id="owner-info-container">
        <div id="description" className="font-card">
          <h3>Description</h3>
          <div>{props.data.roomDescription}
          </div>
          </div>
          <div id="profile-info">

            <div>This is hosted by : </div>
            <div onClick={nameClickHandler} id="profile-info-img">

            <svg
              id="room-profile-image"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327"
                fillRule="evenodd"
                transform="translate(-364 -1999)"
                />
            </svg>
            <span id="room-profile-name">{props.data.name}</span>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default RoomInfo;
