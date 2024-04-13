import React, { useState } from 'react';

const HomePage = ({ isAdmin }) => {
  const [tweets, setTweets] = useState([]);
  const [newTweetText, setNewTweetText] = useState('');

  const handleNewTweetChange = (event) => {
    setNewTweetText(event.target.value);
  };

  const handleNewTweetSubmit = (event) => {
    event.preventDefault();
    if (newTweetText.trim() !== '') {
      const newTweet = {
        id: Date.now(),
        text: newTweetText,
        likes: 0,
        retweets: 0,
      };
      setTweets([newTweet, ...tweets]);
      setNewTweetText('');
    }
  };

  const handleLike = (tweetId) => {
    const updatedTweets = tweets.map(tweet => {
      if (tweet.id === tweetId) {
        return {
          ...tweet,
          likes: tweet.likes + 1,
        };
      }
      return tweet;
    });
    setTweets(updatedTweets);
  };

  const handleRetweet = (tweetId) => {
    const updatedTweets = tweets.map(tweet => {
      if (tweet.id === tweetId) {
        return {
          ...tweet,
          retweets: tweet.retweets + 1,
        };
      }
      return tweet;
    });
    setTweets(updatedTweets);
  };

  return (
    <div className="flex-1 p-4">
      {isAdmin && (
        <div className="mb-4">
          <form onSubmit={handleNewTweetSubmit}>
            <textarea
              className="w-full h-20 p-2 border rounded-md resize-none"
              placeholder="What's happening?"
              value={newTweetText}
              onChange={handleNewTweetChange}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Tweet
            </button>
          </form>
        </div>
      )}
      <div>
        {tweets.map(tweet => (
          <div key={tweet.id} className="border-b mb-4 pb-2">
            <p>{tweet.text}</p>
            <div className="flex mt-2">
              <button className="mr-4" onClick={() => handleLike(tweet.id)}>Like ({tweet.likes})</button>
              <button onClick={() => handleRetweet(tweet.id)}>Retweet ({tweet.retweets})</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
