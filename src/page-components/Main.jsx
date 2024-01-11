import React from 'react';
import css from "../styles/Main.module.css";

export default function Main({ onButtonClick }) {
  return (
    <div>
      <img className={css.runnerImg}id="runner-pic"src="https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/runner.jpeg?v=1701651917040" alt="Runner Image" width="100%"></img>
      <div className={css.section}>
        <h2>Welcome to InjuryPRO - What's bothering you?</h2>
      </div>
      
      <div className={css.buttons}>
        <button onClick={()=>onButtonClick('knee')} className={css.coloredButton}>Knee</button>
        <button onClick={()=>onButtonClick('back')} className={css.coloredButton}>Back</button>
        <button onClick={()=>onButtonClick('ankle')} className={css.coloredButton}>Ankle</button>
        <button onClick={()=>onButtonClick('shoulder')} className={css.coloredButton}>Shoulder</button>
        <button onClick={()=>onButtonClick('foot')} className={css.coloredButton}>Foot</button>
        <button onClick={()=>onButtonClick('hips')} className={css.coloredButton}>Hips</button>
      </div>
      <div className={css.section}>
        <h2>How our page works</h2>
        <p>First, click on the body part that you have injured or want to strengthen. Then, read about more specific targets. If the symptoms match your experience, add the card to your personalized training plan!</p>
        <p>From here, you want to look at the 3 Strength Exercises and pair them with the 3 Stretching exercises that are tailored for recovery and rehab.</p>
      </div>
    </div>
  );
}