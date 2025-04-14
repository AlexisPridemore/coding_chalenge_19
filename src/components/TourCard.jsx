import { useState } from "react";

//TourCard renders individual details
const TourCard ({ id, name, info, image, price, onRemove }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="tour-card">
            <h3>{name}</h3>
            <h5>{info}</h5>

            <p>
                {/* Show full desctition if readMore is true, other a slice*/}
                {readMore ? descrition : `${descrition.substring(0, 80)}...`}
                <button onClick={()=> setReadMore(!readMore)}>
                    {/* Toggle button text*/}
                    {readMore ? "Show less" : "Read More"}
                </button>
            </p>

            {/* Button to remove tour*/}
            <button className="btn-remove" onClicl={() => {
                onRemove(id)
            }}>Not Interested</button>
        </article>
    )
}
    export default TourCard;
      