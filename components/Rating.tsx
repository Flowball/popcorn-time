import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [totalStars, setTotalStars] = useState(5);

  return (
    <div className="flex flex-col">
      <h1>Rate this movie</h1>
      <div className="flex gap-1 text-3xl lg:text-6xl">
        {[...Array(totalStars)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <span
              key={index}
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(currentRating)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </div>
  );
}
