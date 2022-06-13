import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if(number > people.length-1){
      return 0;
    }else if(number < 0){
      return people.length-1;
    }else{
      return number;
    }
  }

  const increaseIndexHandler = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });

  };

  const decreaseIndexHandler = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });


  };

  const randomIndexHandler = () => {
    let randomNumber = (Math.floor(Math.random()*people.length));
    if(randomNumber === index){
      return randomNumber-1;
    }
    return setIndex(checkNumber(randomNumber));
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          type="button"
          className="prev-btn"
          onClick={decreaseIndexHandler}
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="next-btn"
          onClick={increaseIndexHandler}
        >
          <FaChevronRight />
        </button>
      </div>
      <button type="button" className="random-btn" onClick = {randomIndexHandler}>
        Surprise Me!
      </button>
    </article>
  );
};

export default Review;
