import { useEffect, useState } from "react";
import bubbleSvg from "./Hand-Drawn-SVG-Message-Bubble.svg"; // ✅ Import the SVG
import "./App.css";

export default function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data[0]))
      .catch((err) => console.error("Error:", err));
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="page-container">
      <div className="bubble-container">
        <img src={bubbleSvg} alt="Speech Bubble" className="bubble-img" />
        <p className="quote-text">{quote}</p>
      </div>

      <div className="ron-section">
        <img
          className="ron-gif"
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHlxYnM5MDR3c284ZWFhNmF1em9lM2docXZ2d3lsNm1wMGlxa3NrMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m5FqYUKkTB2fe/giphy.gif"
          alt="Ron Swanson"
        />
        <button onClick={getQuote}>Get Another Quote</button>
      </div>
    </div>
  );
}

