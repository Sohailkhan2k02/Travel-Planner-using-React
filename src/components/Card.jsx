import React, { useState } from "react";

function Card({ id, image, info, price, name, removeTour }){
    const [readmore, setReadMore] = useState(false);
    const description = `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadMore(!readmore);
    }


    return (
        <div className="card">
            <img src={image} className="image" alt="img"/>
            <div className="tourInfo">
                <div className="tourDetails">
                    <h4 className="tourPrice">{price}</h4>
                    <h4 className="tourName">{name}</h4>
                </div>
                <div className="description">
                    {readmore ? info : description}
                    <span className="readMore" onClick={readmoreHandler}>
                        {readmore ? ` Show less` : ` Read more`}
                    </span>
                </div>
            </div>
            <button className="btnRed" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div >
    );
};

export default Card;
