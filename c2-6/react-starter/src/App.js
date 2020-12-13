import React, { useState, useEffect} from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import s from './styles/App.module.css';

function App() {
  // Place the write normal js
  // State
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState("Dev Dew");
  const message = "This is my tweet";
  
  // useEffect
  useEffect(() => {
    console.log("Hey. you contact me.")
  },[textInput]);

  return (
    <div>
      <h1 className={s.title}>TWITTER LIGHT</h1>
      <div>
        <CreateTweet 
          textInput={textInput} 
          setTextInput={setTextInput}
          tweets={tweets}
          setTweets={setTweets} />
        <TweetList name={name} tweets={tweets} setTweets={setTweets} />
      </div>
    </div>
  );
};

export default App;
