import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function SearchBar() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (word) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      axios.get(apiUrl).then(handleResponse);
    }
  }

  function handleResponse(response) {
    setResults(response.data[0]);
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
      <Results results={results} />
    </div>
  );
}
