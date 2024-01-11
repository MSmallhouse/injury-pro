import React, { useState } from 'react';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

// Import and apply global CSS stylesheet
import "./styles/styles.css";

// Import and apply App specific css
import css from "./styles/App.module.css"

// App function that is reflected across the site
export default function App() {
  const [page, setPage] = useState("main");
  const [trainingPlan, setTrainingPlan] = useState([])
  
  function handleClick(page) {
    setPage(page);
    window.scrollTo(0, 0);
  };
  
  function addExerciseToPlan(exercise) {
    // Check if an exercise with the same name already exists in the training plan
    const exerciseExists = trainingPlan.some((existingExercise) => existingExercise.name === exercise.name);

    if (!exerciseExists) {
      setTrainingPlan((prevPlan) => [...prevPlan, exercise]);
    }
  };
  
  function removeExerciseFromPlan(exercise) {
    const updatedPlan = trainingPlan.filter((existingExercise) => existingExercise.name !== exercise.name);
    setTrainingPlan(updatedPlan);
  }
    
  return (
    <>
      <div className={css.container}>
        <Navbar onButtonClick={handleClick} />
        <main role="main" className="wrapper">
          <Home onButtonClick={handleClick} page={page}
                addExerciseToPlan={addExerciseToPlan} removeExerciseFromPlan={removeExerciseFromPlan}
                trainingPlan={trainingPlan} />
        </main>
      </div>
    </>
  );
}