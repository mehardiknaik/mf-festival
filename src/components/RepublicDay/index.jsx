import React from "react";
import style from "./RepublicDay.module.css";
import Lottie from "lottie-react";
import anim from "../../assets/republic_day.json";

const RepublicDay = () => {
  return (
    <div className={style.container}>
      <Lottie animationData={anim} style={{ width: 200 }} loop={true} />
    </div>
  );
};

export default RepublicDay;
