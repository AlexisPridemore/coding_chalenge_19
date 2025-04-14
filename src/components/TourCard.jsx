import { useState } from "react";

//TourCard renders individual details
const TourCard = ({ id, name, info, image, price, onRemove }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-info">
        <h3>{name}</h3>
        <h4>${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 80)}...`}
           {/* Toggle button text*/}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "Read More"}
          </button>
        </p>
         {/* Button to remove tour*/}
        <button className="btn-remove" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;      