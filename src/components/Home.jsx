import React, { useState } from 'react';
import css from "../styles/Main.module.css"

import Main from "../page-components/Main.jsx";
import Knee from "../page-components/Knee.jsx";
import Back from "../page-components/Back.jsx";
import Ankle from "../page-components/Ankle.jsx";
import Shoulder from "../page-components/Shoulder.jsx";
import Foot from "../page-components/Foot.jsx";
import Hips from "../page-components/Hips.jsx";
import Information from "../page-components/Information.jsx";
import TrainingPlan from "../page-components/TrainingPlan.jsx";

export default function Home({ onButtonClick, page, addExerciseToPlan, removeExerciseFromPlan, trainingPlan }) {

const displayRehab = (rehabData, buttonFunction, buttonText, description) => {
  return (
    <div className={css.card}>
      <h2 className={css.description}>{rehabData.name}</h2>
      <img src={rehabData.img} className={css.exerciseImage}></img>
      {description ? <p className={css.description}>{rehabData.description}</p> : <div></div>}

      <button onClick={()=>buttonFunction(rehabData)} className={css.addRemoveButton}>{buttonText} </button>      
      
      <div className={css.strengthList}>
        <h3>Strengthening Exercises</h3>
        <ul>
          {Object.entries(rehabData.strengthening).map(([exerciseKey, exercise]) => (
            <li key={exerciseKey}>
              <h4>{exercise.name}</h4>
              <p>{exercise.description}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={css.stretchList}>
        <h3>Stretching Exercises</h3>
        <ul>
          {Object.entries(rehabData.stretching).map(([exerciseKey, exercise]) => (
            <li key={exerciseKey}>
              <h4>{exercise.name}</h4>
              <p>{exercise.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
  
  
  function renderPage(page) {
    switch (page) {
      case "main": 
        return <Main onButtonClick={onButtonClick} />;
      case "knee":
        return <Knee onButtonClick={onButtonClick} addExerciseToPlan={addExerciseToPlan}
                     displayRehab={displayRehab} />;
      case "back":
        return <Back onButtonClick={onButtonClick} addExerciseToPlan={addExerciseToPlan}
                     displayRehab={displayRehab} />;
      case "ankle":
        return <Ankle onButtonClick={onButtonClick} addExerciseToPlan={addExerciseToPlan}
                      displayRehab={displayRehab} />;
      case "shoulder":
        return <Shoulder onButtonClick={onButtonClick} addExerciseToPlan={addExerciseToPlan}
                         displayRehab={displayRehab} />;
      case "foot":
        return <Foot onButtonClick={onButtonClick} addExerciseToPlan={addExerciseToPlan}
                     displayRehab={displayRehab} />;
      case "hips":
        return <Hips onButtonClick={onButtonClick} addExerciseToPlan={addExerciseToPlan}
                     displayRehab={displayRehab} />;
      case "information":
        return <Information />;
      case "trainingPlan":
        return <TrainingPlan trainingPlan={trainingPlan} removeExerciseFromPlan={removeExerciseFromPlan}
                             displayRehab={displayRehab} />;
      default:
        return <Main onButtonClick={onButtonClick} />;
    }
  };

  return (
    <div>
      {renderPage(page)}
    </div>
  );
}