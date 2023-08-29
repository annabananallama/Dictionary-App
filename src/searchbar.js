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
      <div className="bar">
        <form onSubmit={handleSubmit}>
          <input
            className="text"
            id="input"
            type="text"
            placeholder="Enter word here"
            value={word}
            onChange={handleWordChange}
          />
          <button type="submit" className="button">
            Enter
          </button>
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
