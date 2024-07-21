import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button id={`see-more-${id}`} onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "See more"}
          </button>
        </p>
        <button
          id={`delete-btn-${id}`}
          className="delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
