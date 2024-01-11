import React from "react";
import css from "../styles/Main.module.css";

const hipRehab = [{
    "name": "Hip Fractures",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/hip%20fracture.jpg?v=1701644847970",
    "description": "Hip fractures are serious injuries commonly occurring in older adults, often due to falls. They can also happen spontaneously in people with weak bones, such as those with osteoporosis. Symptoms include severe pain in the hip or groin, inability to put weight on the leg on the injured side, stiffness, bruising, and swelling in and around the hip area. A hip fracture may cause the leg on the injured side to appear shorter than the other leg and to stick out to the side. Immediate medical attention is crucial, and treatment typically involves surgery, followed by physical therapy to help regain strength and mobility. Post-surgery, exercises focusing on strengthening the hip and improving balance are essential to aid recovery and prevent future falls.",
    "strengthening": {
      "seated-knee-lifts": {
        "name": "Seated Knee Lifts",
        "description": "Sit in a chair and slowly lift one knee at a time towards your chest."
      },
      "hip-extension": {
        "name": "Hip Extension",
        "description": "Stand behind a chair, gently lift one leg straight back without bending at the waist. Hold and then lower."
      },
      "hip-abduction": {
        "name": "Hip Abduction",
        "description": "Stand and lift your leg to the side. Keep your back and legs straight during the movement."
      }
    },
    "stretching": {
      "seated-hip-stretch": {
        "name": "Seated Hip Stretch",
        "description": "While seated, cross one ankle over the opposite knee and gently lean forward, feeling a stretch in your hip."
      },
      "lying-hip-stretch": {
        "name": "Lying Hip Stretch",
        "description": "Lie on your back and bring your knee towards your chest, holding it with your hands."
      }
    }
  },
  {
    "name": "Bursitis",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/bursitis.jpg?v=1701644922132",
    "description": "Hip bursitis is inflammation of one or more of the bursae in the hip. Bursae are small, fluid-filled sacs that cushion bones, tendons, and muscles near joints. Hip bursitis often causes pain on the outside of the hip and thigh or in the buttock. It can be caused by a number of factors, including repetitive stress (overuse), direct trauma, prolonged pressure, or underlying conditions like rheumatoid arthritis. The pain may intensify with activities such as walking, climbing, or sitting cross-legged. Treatment typically involves rest, ice, and medications to reduce pain and inflammation. Physical therapy exercises can also help strengthen the muscles around the hip and improve flexibility.",
    "strengthening": {
      "clamshells": {
        "name": "Clamshells",
        "description": "Lie on your side with knees bent. Keeping feet together, open and close your knees like a clamshell."
      },
      "bridges": {
        "name": "Bridges",
        "description": "Lie on your back with your knees bent and feet flat on the ground. Lift your hips to form a straight line from your knees to your shoulders."
      },
      "side-leg-raises": {
        "name": "Side Leg Raises",
        "description": "Lie on your side with legs stacked and straight. Lift the top leg upwards, hold for a moment, then lower."
      }
    },
    "stretching": {
      "iliotibial-band-stretch": {
        "name": "Iliotibial (IT) Band Stretch",
        "description": "Stand and cross your uninjured leg in front of the injured leg and bend down to touch your toes."
      },
      "butterfly-stretch": {
        "name": "Butterfly Stretch",
        "description": "Sit with the soles of your feet together and gently press your knees down with your elbows."
      }
    }
  },
  {
    "name": "Labral Tear",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/labral%20tear.jpg?v=1701644946810",
    "description": "The labrum is a ring of cartilage that surrounds the socket of the hip joint. A labral tear can occur from injury, structural issues, or degenerative changes. Symptoms include pain in the hip or groin, a catching or locking sensation in the hip joint, and stiffness or limited range of motion. Athletes who participate in sports such as soccer, hockey, and ballet are at higher risk. Treatment depends on the severity of the tear and may include rest, physical therapy, and pain management. In more severe cases, arthroscopic surgery to repair or remove the torn part of the labrum may be necessary.",
    "strengthening": {
      "standing-hip-flexion": {
        "name": "Standing Hip Flexion",
        "description": "Stand and lift your knee as if marching, then lower it back down."
      },
      "lying-leg-lifts": {
        "name": "Lying Leg Lifts",
        "description": "Lie on your side and lift the upper leg without rotating the hip."
      },
      "hip-adduction": {
        "name": "Hip Adduction",
        "description": "Lie on your side and lift the bottom leg up towards the ceiling."
      }
    },
    "stretching": {
      "piriformis-stretch": {
        "name": "Piriformis Stretch",
        "description": "Lie on your back and cross one leg over the other thigh. Pull the knee towards your chest."
      },
      "hip-flexor-stretch": {
        "name": "Hip Flexor Stretch",
        "description": "Kneel on one knee, the other foot in front, and push your hips forward until you feel a stretch in the front of your hip."
      }
    }
  }
];

export default function Hips({ onButtonClick, addExerciseToPlan, displayRehab }) {
  return (
    <div>
      {hipRehab.map((rehab) => displayRehab(rehab, addExerciseToPlan, "Add to Plan", true))}
      <button onClick={()=>onButtonClick('home')} className={css.homeButton}>Back to Home Page</button>
    </div>
    );
}