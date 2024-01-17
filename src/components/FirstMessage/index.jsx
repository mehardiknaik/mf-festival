import React, { useState } from "react";
import style from "./FirstMessage.module.css";
import Confetti from "react-confetti";

const FirstMessage = () => {
  const [party, setParty] = useState(true);
  return (
    <>
      <div className={style.container}>FirstMessage</div>
      <div className={style.confetticontainer}>
        <Confetti
          width={window.innerWidth ?? 100}
          height={window.innerHeight ?? 100}
          numberOfPieces={party ? 500 : 0}
          recycle={false}
          onConfettiComplete={(confetti) => {
            setParty(false);
            confetti.reset();
          }}
        />
      </div>
    </>
  );
};

export default FirstMessage;
