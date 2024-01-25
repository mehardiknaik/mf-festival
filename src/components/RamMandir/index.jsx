import React from "react";
import style from "./RamMandir.module.css";
import Lottie from "lottie-react";
import anim from "../../assets/confeti.json";

const RamMandir = () => {
  return (
    <div className={style.container}>
      <Lottie
        animationData={anim}
        style={{ width: 200, height: 300 }}
        loop={true}
      />
      <div className={style.textContainer}>Ram Mandir</div>
    </div>
  );
};

export default RamMandir;
