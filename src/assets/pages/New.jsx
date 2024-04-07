import React, { useState } from 'react';

const News = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');

  const handleNewPostChange = (event) => {
    setNewPostText(event.target.value);
  };

  const handleNewPostSubmit = (event) => {
    event.preventDefault();
    if (newPostText.trim() !== '') {
      const newPost = {
        id: Date.now(),
        text: newPostText,
      };
      setPosts([newPost, ...posts]);
      setNewPostText('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Post Page</h1>
      <form onSubmit={handleNewPostSubmit} className="mb-4">
        <textarea
          className="w-full h-32 p-2 border rounded-md resize-none"
          placeholder="What's on your mind?"
          value={newPostText}
          onChange={handleNewPostChange}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Post
        </button>
      </form>
      <div>
        {posts.map(post => (
          <div key={post.id} className="bg-gray-100 p-4 mb-4 rounded">
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
