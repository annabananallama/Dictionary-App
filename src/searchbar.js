import React, { useState } from "react";

export default function SearchBar() {
  const [word, setWord] = useState("");

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter word here"
          value={word}
          onChange={handleWordChange}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
