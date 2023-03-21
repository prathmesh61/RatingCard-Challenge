import { useState } from "react";

import "./App.css";
import { Mobile, Star } from "./icon/icon";

function App() {
  const [rating, setRating] = useState();
  const [isSumbit, setIsSumbit] = useState();

  const cardSumbit = (e) => {
    e.preventDefault();
    setIsSumbit(true);
  };
  const handleRatingClicked = (n) => {
    setRating(n);
  };

  return (
    <div className="App">
      {isSumbit ? (
        <div>
          <div className="card">
            <div className="thankuCont">
              <Mobile className="mobileicon" />
              <h1>Thank You!</h1>
              <span className="RatingNumber">
                You Selected {rating} Out Of 5
              </span>
              <p>
                Your challenge is to build out this interactive rating component
                design & You Are Pass.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <form className="card" onSubmit={cardSumbit}>
          <Star className="star" />
          <h1>Interactive rating component</h1>
          <p>
            This is a nice, small project to practice handling user interactions
            and updating the DOM.
          </p>

          <div className="cardBtn">
            {[1, 2, 3, 4, 5].map((n, idx) => (
              <button
                key={idx}
                className="rating"
                type="button"
                name="button"
                value={rating}
                onClick={() => handleRatingClicked(n)}
              >
                {n}
              </button>
            ))}
          </div>
          <button
            disabled={rating === undefined}
            className="submit"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
