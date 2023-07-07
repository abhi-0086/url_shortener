import React from "react";

const InputShortener = () => {
  return (
    <div className="input-container">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input type="text" placeholder="Paste a link to shorten" />
        <button>Shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
