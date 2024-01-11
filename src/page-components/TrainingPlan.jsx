import React from "react";
import css from "../styles/Main.module.css";

export default function TrainingPlan({ trainingPlan, removeExerciseFromPlan, displayRehab }) {
  // Organize exercises by body part
  const exercisesByBodyPart = trainingPlan.reduce((acc, exercise) => {
    const { bodyPart } = exercise;
    acc[bodyPart] = acc[bodyPart] || [];
    acc[bodyPart].push(exercise);
    return acc;
  }, {});
    if (trainingPlan.length == 0) {
      return (
      <div className={css.section}>
        <h2>Training Plan</h2>
        <p>Choose a target from our home page and add some excercises to your plan!</p>
      </div>
      );
    } else {
      return (
      <div>
        <div className={css.section}>
          <h2>Training Plan</h2>
        </div>
        <div>
          {trainingPlan.map((rehabData, index) => (
            <div key={index}>
              {displayRehab(rehabData, removeExerciseFromPlan, "Remove from Plan", false)}
            </div>
          ))}
        </div>
      </div>
    );
  }
};