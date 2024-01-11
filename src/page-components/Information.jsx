import React from "react";
import css from "../styles/Main.module.css";

export default function Information() {
  return (
    <div>
      <div className={css.section}>
        <h2>About Us</h2>
        <p>InjuryPro works to bring physical therapy into everyone's home, making it easier than ever to keep up with your health. Simply read the descriptions of common minor injuries to pinpoint how to properly alleviate your pain.</p>
        <p>InjuryPro uses information from credible professionals to fit you with a routine tailored to your pain.</p>
        <p>If something doesn't feel right, you may have made a mistake! Keep in mind that InjuryPro is geared towards minor injuries and preventative therapy. </p>
      </div>
      <img className={css.runnerImg} src="https://cdn.glitch.global/6a9cd919-d775-412f-985d-0a65f5c5143f/gym.jpeg?v=1701660671957"></img>
    </div>
    );
}