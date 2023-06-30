import React from 'react'
import Card from './Card';
const Tours = (props) => {
    let tours= props.tours;
    let removeTour= props.removeTour;
  return (
    <div>
      <div><h1>Plan With Love</h1></div>
      <div>
        {
            tours.map((tour)=>{
                return <Card tour= {tour} key={tour.id} removeTour= {removeTour}></Card>
            })
        }
      </div>
    </div>
  )
}

export default Tours
