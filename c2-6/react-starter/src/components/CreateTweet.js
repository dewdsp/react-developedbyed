import React from "react";
import { v4 as uuidv4 } from "uuid";

// CreateTweet component
const CreateTweet = ({ textInput, setTextInput, tweets, setTweets}) => {
  // Function
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, {message: textInput, id: uuidv4()}]);
    setTextInput("");
  };

  return(
    <form onSubmit={submitTweetHandler}>
      <textarea 
        value={textInput} 
        onChange={userInputHandler}
        cols="30" 
        rows="5">
      </textarea>
      <button>Submit</button>
      {/* <h1>{textInput}</h1> */}
    </form>
  );
};

export default CreateTweet;