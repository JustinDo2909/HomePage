import React, { useEffect, useState } from "react";
import data from "./data/Data.json";
import "./Valuation.scss";
import pic2 from "./img/Sculpture_Pic.jpg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Sculpture = () => {
  const [dataContent, setDataContent] = useState(null);
  const navigate = useNavigate("");
  useEffect(() => {
    setDataContent(data);
  }, []);
  if (!dataContent) {
    return <div>Loading....</div>;
  }
  //check xem người dùng đã đăng nhập hay chưa
  const handleSendForm = () => {
    const checkUser = window.localStorage.getItem("userId");
    if (checkUser) {
      navigate("/Service/valuation/valuation-form");
    } else {
      toast.error(`You need to login`, { autoClose: 3000 });
    }
  };
  return (
    <div className="wrapperrr">
      <ToastContainer />
      <div className="header-valuation">
        <div>
          <h2>{dataContent.SculptureIntroduction.subtle}</h2>
        </div>
        <div>
          <h1>{dataContent.SculptureIntroduction.title}</h1>
        </div>
      </div>
      <div>
        <button onClick={handleSendForm} className="btn-form">
          Send Form To Sculpture
        </button>
      </div>
      <div className="body-valuation">
        {dataContent.SculptureIntroduction.sections.map((section, index) => {
          switch (section.type) {
            case "paragraph":
              return (
                <div className="paragraph">
                  <p key={index}>{section.content}</p>{" "}
                </div>
              );
            case "header":
              return (
                <div className="headerr">
                  <strong key={index}>{section.content}</strong>{" "}
                </div>
              );
            case "list":
              return (
                <div className="list">
                  <li key={index}>{section.content}</li>{" "}
                </div>
              );
            case "img":
              return (
                <img
                  className="img-valuation"
                  src={section.src === "pic2" ? pic2 : ""}
                  alt={section.alt}
                ></img>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Sculpture;
