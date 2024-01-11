import React from "react";
import css from "../styles/Navbar.module.css";


export default function Navbar({ onButtonClick }) {
  
  return (
    <div>
      <div className={css.navbar} >
      <a onClick={() => onButtonClick('main')}>InjuryPro</a>
      <a onClick={() => onButtonClick('trainingPlan')}>Training Plan</a>
      <a onClick={() => onButtonClick('information')}>Information</a>
      </div>
      <div className={css.spacer}></div>
    </div>
  );
}
