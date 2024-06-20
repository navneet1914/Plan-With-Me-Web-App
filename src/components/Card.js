import React, { useState } from "react";



function Card({id, image, info, price, name, removeTour}){

    const [readmore, setReadmore] = useState(false);
    // hume starting me description upto 200 no of characters tak dikhane h. Toh hume 200 no of characters tak ki subStrings nikalni padegi-->
    const halfInformation = `${info.substring(0,200)}....`;
    const description =  readmore ? info :  halfInformation;
    
    function readmoreHandler(){
        // Basically onclicking we are making the readmore as true to false and false to true
        setReadmore(!readmore);
    }

   

      return(
          <div className="card">
            <img src={image} className="image"></img>


            <div className="tour-info">

            <div className="tour-details">
                <h4 className="tour-price">₹ {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">

               {description}
               <span className="read-more" onClick={readmoreHandler}>
                   {readmore ? 'Read less': 'Read more'}
               </span>

            </div>
            </div>
            
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>

          </div>
      );
};

export default Card;