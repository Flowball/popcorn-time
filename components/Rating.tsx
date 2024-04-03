import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [totalStars, setTotalStars] = useState(5);

  return (
    <div className="App">
      <h1>Star rating</h1>
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              key={star}
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => setRating(currentRating)}
            />
            <span
              className="list-none"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
      <p>Your rating is: {rating}</p>
      <br />
    </div>
  );
}
