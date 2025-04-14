import { useState } from "react";
import Gallery from "./components/Gallery";

//Root component of the App
function App() {
  //Global state to hold list of tours
  const [tours, setTours] = useState([]); 

  //function to remove tour by its ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

 return (
    <main>
      <h1>Our Tours</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  );
};

export default App;

