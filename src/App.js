import React from "react";
import "./styles.css";
import SearchBar from "./searchbar.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="content">
      <h1>DICTIONARY APP</h1>
      <SearchBar />
      <Footer />
    </div>
  );
}
