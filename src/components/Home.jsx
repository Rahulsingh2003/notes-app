import React, { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        className="p-5 rounded-2xl"
        type="text"
        placeholder="enter Title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default Home;
