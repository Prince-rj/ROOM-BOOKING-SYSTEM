import React from 'react';
import Card from './Card';
import './CSS/Lodging.css'; 

function Lodging(props) {

  // Function to chunk the array into smaller arrays of given size
  const tempArr=[];
  props.chunkedData.map((row)=>{
    row.filter(card=>card.roomType==='Lodging').map((data)=>{
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
    <div className="lodging-cards-container">
      {chunkArr.map((row, index) => (
        <div key={index} className="lodging-cards-row">
          {row.map((card) => (
            <Card setData={props.setData} key={card._id} data={card} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Lodging;
