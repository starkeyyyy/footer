import React, { useState } from "react";
import "./styles/GoogleLandingPage.css";

const GoogleLandingPage = () => {
  const [query, setQuery] = useState("");
  const [iframeSrc, setIframeSrc] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;

    const isURL = query.startsWith("http://") || query.startsWith("https://");

    if (isURL) {
      setIframeSrc(query);
    } else {
      setIframeSrc(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="google-container">
      <nav className="google-navbar">
        <a href="#">Gmail</a>
        <a href="#">Images</a>
        <div className="google-avatar"></div>
      </nav>

      <main className="google-main">
        <img
          className="google-logo"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />

        <div className="google-search">
          <input
            type="text"
            placeholder="Search Google or type a URL"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="google-icon" onClick={handleSearch}>🔍</span>
        </div>

        <div className="google-buttons">
          <button onClick={handleSearch}>Google Search</button>
          <button onClick={() => window.open("https://www.google.com/doodles", "_blank")}>
            I'm Feeling Lucky
          </button>
        </div>
      </main>

      {iframeSrc && (
        <div className="google-iframe-container">
          <iframe src={iframeSrc} title="Result" frameBorder="0"></iframe>
        </div>
      )}
    </div>
  );
};

export default GoogleLandingPage;
