import React from 'react';
import Card from './Card';
import './CSS/Profile.css'; 
import { useNavigate } from 'react-router';
function RoomProfile(props) {
  const navigate = useNavigate();
  const logoutclickHandler = () =>{
    props.setLogin(false)
    navigate('/login')
  }
  

  const tempArr=[];
  props.chunkedData.map((row)=>{
    row.filter(card=>card.email===props.profileEmail).map((data)=>{
      tempArr.push(data)
    })
  })
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };


const chunkArr=chunkArray(tempArr,3)

  return (
    <>
    <div id='profile-container'>
        <div id='profile-img'>
        <svg height="200" viewBox="0 0 20 20" width="200" xmlns="http://www.w3.org/2000/svg"><path d="m374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673c1.366-1.099 2.242-2.783 2.242-4.673 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.89.876 3.574 2.242 4.673-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" fillRule="evenodd" transform="translate(-364 -1999)"/></svg>
        </div>

        <div id='profile-details'>
            <div className='profile-details-div'><span id='profile-name'>{props.profileName}</span>
            </div>

            <div className='profile-details-div'><span id='profile-email'>{props.profileEmail}</span>

            </div>
        </div>
    </div>



    <div className="profile-cards-container">
    <h1 id='listings'>Listings</h1>
      {chunkArr.map((row, index) => (
        <div key={index} className="profile-cards-row">
          {row.map((card) => (
            <Card  setData={props.setData} key={card.id} data={card} />
          ))}
        </div>
      ))}
    </div>
    </>
  );
}

export default RoomProfile;
