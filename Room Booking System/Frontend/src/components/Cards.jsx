import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CSS/Cards.css'; 
import { IoIosHome } from "react-icons/io";
import axios from 'axios';

function Cards(props) {
  const [typingText, setTypingText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      const that = this;
      let delta = 200; 

      if (this.isDeleting) {
        delta /= 2; 
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500; 
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000000}";
        document.body.appendChild(css);
  }, []);

  
  const findRoom = async () => {
    try {
      const res = await axios.get('http://localhost:2000/fetchRoomData');
      const cardData = res.data.user;
      props.setChunkedData(chunkArray(cardData, 3));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findRoom();
  }, []);

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (<>
  
  
      <div className='back-image-container'>
        <h1 className='head-cards'>
          {/* <img src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="/> */}

          <span
            className="typewrite"
            data-period="2000"
            data-type='[ "Welcome to RoomRover","Best Hotel and Room Booking Website.",  "We Book Rooms and Hotels."]'
          >
            <span className="wrap"></span>
          </span>
          <IoIosHome />
        </h1>
        
      </div>
    <div className="cards-container">
      {props.chunkedData.map((row, index) => (
        <div key={index} className="cards-row">
          {row.map((card) => (
            <Card setData={props.setData} key={card._id} data={card} />
          ))}
        </div>
      ))}
    </div>
      </>
  );
}

export default Cards;
