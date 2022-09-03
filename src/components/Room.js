import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

import Footer from "./Footer";

const Room = () => {
  const [roomId, setRoomId] = useState(null);
  const [randomUsername, setRandomUsername] = useState(null);
  const [formData, setFormData] = useState({ roomId: "" });

  useEffect(() => {
    const adjective = faker.word.adjective();
    const noun = faker.word.noun();

    let username = `${adjective} ${noun}`;
    username = username.replace(/\s/g, "");

    localStorage.setItem("guest", username);
    setRandomUsername(username);
  }, []);

  const generateRoomId = () => {
    setRoomId(faker.music.songName().replace(/\s/g, ""));
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData({ roomId: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl mt-5 mb-5 text-lightGreen">
        Generate a new Room ID or enter an existing Room ID
      </h1>
      <h2 className="text-4xl mb-5">You are: {randomUsername}</h2>

      {roomId ? (
        <p className="text-4xl mb-5 p-4">Room ID: {roomId}</p>
      ) : (
        <button
          onClick={generateRoomId}
          className="w-1/2 border p-4 mb-5 rounded-lg bg-white text-3xl text-lightGreen hover:bg-black"
        >
          Generate Room ID
        </button>
      )}

      <form
        onSubmit={handleSubmit}
        className="text-3xl flex flex-col items-center w-full"
      >
        <label htmlFor="roomid" hidden>
          Room ID
        </label>
        <input
          className="block p-4 w-1/2 border focus:border focus:border-lightGreen focus:ring-2 focus:ring-lightGreen rounded-lg dark:bg-gray-700 dark:placeholder-gray-300 dark:text-white"
          type="text"
          id="roomid"
          name="roomid"
          placeholder="Enter Room ID"
          value={formData.roomId}
          onChange={handleInputChange}
        />

        <button className="w-1/2 p-4 mt-5 rounded-lg bg-lightGreen text-3xl hover:bg-green-600">
          Enter Room
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Room;
