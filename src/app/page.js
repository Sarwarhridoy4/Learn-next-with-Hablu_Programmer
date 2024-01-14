"use client";
import React, { useState } from "react";

const Home = () => {
  const [greet, setGreet] = useState("World");
  const greatings = () => {
    setGreet("Hablu programmer !!")
  };
  return (
    <main>
      <h1>Hellow {greet}</h1>
      <button onClick={greatings}>Surprize!</button>
    </main>
  );
};

export default Home;
