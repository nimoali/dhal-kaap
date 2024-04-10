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
        date: new Date().toLocaleString() // Adding the current date and time
      };
      setPosts([newPost, ...posts]);
      setNewPostText('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Post Page</h1>
      <form onSubmit={handleNewPostSubmit} className="mb-4">
        <textarea className="w-full h-32 p-2 border rounded-md resize-none" placeholder="What's on your mind?" value={newPostText} onChange={handleNewPostChange}></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Post</button>
      </form>
      <div>
        {posts.map(post => (
          <div key={post.id} className="bg-gray-100 p-4 mb-4 rounded flex gap-4">
            <img className='w-[50px] h-[50px] rounded-full' src="https://img.freepik.com/free-photo/gardener-apron-african-guy-greenhouse-flowers-pot_1157-47086.jpg?w=360" alt="" />
            <div>
              <h1>Admin</h1>
              <p>{post.text}</p>
              <p className="text-gray-500 text-sm">{post.date}</p> {/* Displaying the date */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
