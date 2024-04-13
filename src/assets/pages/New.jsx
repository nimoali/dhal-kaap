import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Header from '../component/Header';

// Simple News Component
const News = ({ message }) => {
  return (
    <Container className="news">
      <div>
       
      </div>
      <h3 className="text-xl font-semibold">News</h3>
      <p className="text-gray-500">{message}</p>
    </Container>
  );
};

// Default message for the News component
const defaultMessage = "Haven't played for about a month, too busy coding. So tired this evening though. Poker tournament with the husband later..";

// Admin Component
const Admin = ({ setMessage }) => {
  const [newMessage, setNewMessage] = useState(defaultMessage);

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = () => {
    setMessage(newMessage);
  };

  return (
    <Container className="admin">
      <div>
        <Header />
      </div>
      <h3 className="text-xl font-semibold mt-20">Admin</h3>
      <textarea value={newMessage} onChange={handleChange} className="w-full h-32 border border-gray-300 p-2" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
        Set Message
      </button>
    </Container>
  );
};

// Example usage of the News and Admin components
const MainComponent = () => {
  const [message, setMessage] = useState(defaultMessage);

  return (
    <Container className="main-component">
      <Admin setMessage={setMessage} />
      <News message={message} />
    </Container>
  );
};

const Container = tw.div`
  p-4
  bg-white
  rounded
  shadow
`;

export default MainComponent;