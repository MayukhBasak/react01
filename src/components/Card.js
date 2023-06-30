import React, { useState } from 'react'

const Card = (props) => {
    let tour= props.tour;
    let removeTour= props.removeTour;
    let [readmore, setReadmore]= useState(false);
    let description= readmore? tour.info : tour.info.substring(0, 100);
    function readMoreHandler(){
        setReadmore((prev)=> !prev);
    }
    function removeTourHandler(){
        removeTour(tour.id);
    }
  return (
    <div>
      <img src={tour.image} alt={tour.name}/>
      <div>
        <div>
            <div>{tour.price} </div>
            <div>{tour.name} </div>
        </div>
        <div>
            {description}
            <span onClick={readMoreHandler}>
                {
                    readmore? `...show less`: `...read more`
                }
            </span>
        </div>
      </div>
      <button onClick={removeTourHandler}>Not Interested</button>
    </div>
  )
}

export default Card
