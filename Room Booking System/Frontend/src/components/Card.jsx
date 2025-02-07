import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick"

import { useNavigate } from "react-router-dom";
import './CSS/Card.css'
function Card(props) {
    const navigate=useNavigate();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const cardClickHandler=(e)=>{
        
          props.setData({
            name:props.data.name,
            email:props.data.email,
            roomName:props.data.roomName,
            roomAddress:props.data.roomAddress,
            roomPrice:props.data.roomPrice,
            roomDescription:props.data.roomDescription,
            roomType:props.data.roomType,
            roomImage:props.data.roomImage
          })
          console.log(props.data)
          navigate('/roominfo')
        }
        
      return (
        <div  id='card-id'>
          {
            (props.data.roomImage.length==1)?
            <img id='room-image-single' src={props.data.roomImage[0]}></img>
            :
          <Slider {...settings}>
            {
              props.data.roomImage.map(img=>{
              
              return (
                <img key={img} id ='room-image' src={img} alt="image" />
              )
              })
            }
          </Slider>
}
          <div onClick={cardClickHandler} id='Details'>
            <span className="font-card"  id='card-name'>{props.data.roomName}</span>
            <span className="font-card" id='card-address'>{props.data.roomAddress}</span>
            <span className="font-card" id='card-price'>₹{props.data.roomPrice}</span>
          </div>
        </div>
      );
}
export default Card