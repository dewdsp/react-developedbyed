import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets }) => {
  return(
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet 
          name={name} 
          tweet={tweet} 
          setTweets={setTweets} 
          tweets={tweets} />
      ))}
    </div>
  );
};

export default TweetList;