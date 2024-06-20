import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";


const App = () => {

  const [tours, setTour] = useState(data);
  

  // card ko UI pe remove krane k lie
  function removeTour(id){
    const newTours = tours.filter((tour) => tour.id !== id);
    // card ko UI se remove krane k lie and then usko UI pe reflect krwane k lie we have used setTour
    setTour(newTours);
  }

  if(tours.length === 0){
    return (
      // Apna khud Ka UI return kr rhe h jb tours.length empty ho jaega
      <div className="refresh">
        <h2>No Tours Left</h2>
        {/* button ko click krne pe setTour k helpse tours naam l variable me data ka sara content fir se aa jaega */}
        {/* jb v listeners jaise onClick lga k hm usme function call krte h aur funcn call krte tym input parameters v pass kr re hote h tb hume callback function ka use krne pdta h. */}
        {/* Callback funcn krta ye h ki jb button click hota h tb hi uske andr ka likha statement execute hota h */}
        {/* Agr callback funcn nai likha hota humne to dikkat ye ho jaati ki bina button click kie hue hi funcn call ho rha hoga */}
        <button className="btn-white" onClick ={() => setTour(data)}>
          Refresh
        </button>
      </div>
    );
  }


  return (
  <div className="app">

     <Tours tours={tours} removeTour = {removeTour}></Tours>

  </div>


  );
};

export default App;
