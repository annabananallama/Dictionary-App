import React, { useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [word, setWord] = useState("");

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

  function handleResponse(response) {}

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  axios.get(apiUrl).then(handleResponse);

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
