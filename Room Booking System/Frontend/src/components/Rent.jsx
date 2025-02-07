import React from 'react';
import Card from './Card';
import './CSS/Rent.css'; 

function Rent(props) {
  

 
  const tempArr=[];
  props.chunkedData.map((row)=>{
    row.filter(card=>card.roomType==='Rent').map((data)=>{
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
    <div className="rent-cards-container">
      {chunkArr.map((row, index) => (
        <div key={index} className="rent-cards-row">
          {row.map((card) => (
            <Card key={card._id} setData={props.setData} data={card} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Rent;
