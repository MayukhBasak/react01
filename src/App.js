import "./App.css";
// collect the data from the source files
import data from "./data";
// importing Tours
import Tours from "./components/Tours";
import { useState } from "react";

function App() {
  const [tours, setTours]= useState(data);
  function removeTour(id){
    let newTours= tours.filter((tour)=>
      tour.id!== id
    )
    setTours(newTours);
  }
  if(tours.length=== 0){
    return (
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <h1>No tours left</h1>
        <button onClick={()=> setTours(data)} className=" mx-4 px-20 border-white">Refresh</button>
      </div>
    )
    // setTours(data);
  }
  return (
    <div className="App">
      <Tours tours= {tours} removeTour= {removeTour}></Tours>
    </div>
  );
}

export default App;
