import React, { useState, useEffect } from "react";
import axios from "axios";

const Calculator = ({ shape, color, clarity, carat }) => {
  const [data, setData] = useState(null);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    if (shape && color && clarity && carat) {
      const apiUrl = `https://www.idexonline.com/DPService.asp?SID=4wp7go123jqtkdyd5f2e&cut=${shape}&carat=${carat}&color=${color}&clarity=${clarity}`;

      axios
        .get("https://api.allorigins.win/get?url=" + encodeURIComponent(apiUrl))
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(
            response.data.contents,
            "application/xml"
          );

          const price = sanitizeValue(xmlDoc.getElementsByTagName("price")[0]?.textContent);
          const min = sanitizeValue(xmlDoc.getElementsByTagName("min")[0]?.textContent);
          const max = sanitizeValue(xmlDoc.getElementsByTagName("max")[0]?.textContent);
          const avg = sanitizeValue(xmlDoc.getElementsByTagName("avg")[0]?.textContent);
          const count = parseInt(xmlDoc.getElementsByTagName("count")[0]?.textContent);
          const link = sanitizeValue(xmlDoc.getElementsByTagName("link")[0]?.textContent);

          if (count === 0) {
            setNoResult(true);
            setData(null);
          } else {
            setNoResult(false);
            setData({ price, min, max, avg, count, link });
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
          setNoResult(true);
          setData(null);
        });
    }
  }, [shape, color, clarity, carat]);

  const sanitizeValue = (value) => {
    return value === "There is no available data for this query." ? "N/A" : value;
  };

  const formatNumber = (number) => {
    if (number === "N/A") return number;
    return parseFloat(number).toLocaleString('en-US');
  };

  return (
    <div>
      <h2>Diamond Price Calculator</h2>
      {noResult ? (
        <p>No result</p>
      ) : data ? (
        <div className="output">
          <div className="result-output-1">
            <div className="toolTip-1">
              <p>Fair Price Estimate</p>
            </div>
            <div className="total-price">
              <p>{formatNumber(data.price)}$</p>
            </div>
            <div className="output-value-selected">
              <p>
                {shape} {carat} Carat {color} {clarity}
              </p>
            </div>
          </div>
          <div className="result-output-2">
            <div className="wrapper-block">
              <div className="toolTip">
                <b>Avg Range</b>
              </div>
              <div className="price-flex">
                <p>Avg: {formatNumber(data.avg)}$</p>
              </div>
            </div>
            <div className="wrapper-block">
              <div className="toolTip">
                <b>Last 30 Day Change</b>
              </div>
              <div className="price-flex">
                <p>Min: {formatNumber(data.min)}$</p>
                <p>Max: {formatNumber(data.max)}$</p>
              </div>
            </div>
            <div className="wrapper-block">
              <div className="toolTip">
                <b>Price per Carat</b>
              </div>
              <div className="price-flex">
                <p>Count: {data.count}</p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">Link</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Calculator;
