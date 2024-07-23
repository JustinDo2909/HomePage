import React, { useEffect, useState } from "react";
import data from "./data/Data.json";
import "./Valuation.scss";
import pic1 from "./img/pic1_Valuation.jpg";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Valuation = () => {
  const [dataContent, setDataContent] = useState(null);
  const navigate = useNavigate();

  //call data từ Json
  useEffect(() => {
    setDataContent(data);
  }, []);
  
  if (!dataContent) {
    return <div>Loading....</div>;
  }

  const handleSendForm = () => {
    const checkUser = window.localStorage.getItem("userId");
    if (checkUser) {
      navigate("/Service/valuation/valuation-form");
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="wrapperrr">
      <ToastContainer />
      <div className="header-valuation">
        <div>
          <h2>{dataContent.ValuationIntroduction.subtle}</h2>
        </div>
        <div>
          <h1>{dataContent.ValuationIntroduction.title}</h1>
        </div>
      </div>
      <div>
        <button onClick={handleSendForm} className="btn-form">
          Send Form To Valuation
        </button>
      </div>
      <div className="body-valuation">
        {dataContent.ValuationIntroduction.sections.map((section, index) => {
          switch (section.type) {
            case "paragraph":
              return (
                <div className="paragraph" key={index}>
                  <p>{section.content}</p>
                </div>
              );
            case "img":
              return (
                <img
                  className="img-valuation"
                  key={index}
                  src={section.src === "pic1" ? pic1 : ""}
                  alt={section.alt}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Valuation;
