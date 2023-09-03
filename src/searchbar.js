import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function SearchBar() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (word) {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      axios.get(apiUrl).then(handleResponse);

      let imagekey = "9ceo40387d684fd72301c1f33tae08b2";
      let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imagekey}&per_page=1`;

      axios.get(imageApiUrl).then(handleImageResponse);
      let headers = { Authorization: `Bearer ${imagekey}` };
      axios.get(imageApiUrl, { headers: headers }).then(handleImageResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
