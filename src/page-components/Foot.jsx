import React from "react";
import css from "../styles/Main.module.css";

const footRehab = [{
    "name": "Plantar Fasciitis",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/plantar%20fasciatis.png?v=1701644721717",
    "description": "Plantar fasciitis is a common cause of heel pain involving inflammation of the plantar fascia, a thick band of tissue that runs across the bottom of your foot and connects your heel bone to your toes. It commonly causes a stabbing pain that usually occurs with the first steps in the morning. As you get up and move, the pain normally decreases, but it might return after long periods of standing or when you stand up after sitting. Plantar fasciitis is particularly common in runners, overweight individuals, and those wearing shoes with inadequate support. Treatment focuses on relieving inflammation and pain, improving foot flexibility, and supporting the arch. This includes rest, ice, proper footwear, arch supports, and stretching exercises. In some cases, physical therapy or night splints may be recommended.",
    "strengthening": {
      "towel-curls": {
        "name": "Towel Curls",
        "description": "Place a small towel on the floor and use your toes to scrunch it toward you."
      },
      "toe-taps": {
        "name": "Toe Taps",
        "description": "Sit with your feet flat on the floor and then lift the toes while keeping your heel grounded."
      },
      "calf-raises": {
        "name": "Calf Raises",
        "description": "Stand on the edge of a step and rise up on your toes, then lower down below the step level."
      }
    },
    "stretching": {
      "plantar-fascia-stretch": {
        "name": "Plantar Fascia Stretch",
        "description": "Sit and cross one leg over the other, pull your toes back towards your shin until you feel a stretch in the arch of your foot."
      },
      "calf-stretch": {
        "name": "Calf Stretch",
        "description": "Stand facing a wall with one foot behind the other, press the back heel into the ground."
      },
      "towel-stretch": {
        "name": "Towel Stretch",
        "description": "Sit with your leg outstretched, loop a towel around the ball of your foot, and gently pull the towel towards you."
      }
    }
  },
  {
    "name": "Stress Fractures",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/stress%20fracture.jpg?v=1701644754124",
    "description": "Stress fractures in the foot are tiny cracks in a bone, often caused by repetitive force, often from overuse such as jumping up and down or running long distances. They can also arise from normal use of a bone that's been weakened by a condition such as osteoporosis. Stress fractures are common in the weight-bearing bones of the foot and lower leg. The most common symptom is pain that develops gradually, increases with weight-bearing activity, and diminishes with rest. Swelling, bruising, and tenderness may also be present. Treatment involves rest, ice, and elevation. Protective footwear or a brace might be necessary to reduce stress on the foot. Full healing can take several weeks to months and avoiding high-impact activities during this time is crucial.",
    "strengthening": {
      "arch-lifts": {
        "name": "Arch Lifts",
        "description": "Stand with your feet flat and lift the arches of your feet while keeping your toes and heels on the ground."
      },
      "toe-yoga": {
        "name": "Toe Yoga",
        "description": "While standing, lift your big toe while keeping the other four toes on the ground, then switch."
      },
      "ankle-inversion-and-eversion": {
        "name": "Ankle Inversion and Eversion",
        "description": "Sit with your feet off the ground and turn your ankles inwards (inversion) and then outwards (eversion)."
      }
    },
    "stretching": {
      "towel-stretch": {
        "name": "Towel Stretch",
        "description": "Same as described above."
      },
      "calf-stretch": {
        "name": "Calf Stretch",
        "description": "Same as described above."
      },
      "toe-extensions": {
        "name": "Toe Extensions",
        "description": "Sit and place your foot on the opposite knee. Gently pull your toes back towards you."
      }
    }
  },
  {
    "name": "Bunions",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/bunions.jpg?v=1701644778372",
    "description": "Bunions are bony bumps that form on the joint at the base of the big toe, resulting from the misalignment of the big toe joint. This causes the big toe to turn inward, towards the other toes, leading to pain, tenderness, and swelling. Bunions can be caused by genetic factors, arthritis, or wearing poorly fitting shoes, such as tight, narrow, or high-heeled shoes. Symptoms include a bulging bump on the outside of the base of your big toe, swelling, redness or soreness, and limited movement of your big toe. Treatment typically involves changing footwear, adding padding and supports, medications for pain relief, and in some cases, physical therapy. Severe cases might require surgical intervention.",
    "strengthening": {
      "toe-spread-outs": {
        "name": "Toe Spread-Outs",
        "description": "Sit or stand and spread your toes as far apart as possible, then relax them. Repeat several times."
      },
      "big-toe-presses": {
        "name": "Big Toe Presses",
        "description": "Press your big toe down into the ground while lifting the other toes, then switch."
      },
      "marble-pickup": {
        "name": "Marble Pickup",
        "description": "Use your toes to pick up marbles or small objects from the floor."
      }
    },
    "stretching": {
      "toe-stretches": {
        "name": "Toe Stretches",
        "description": "Manually stretch your toes in."
      },
      "big-toe-push": {
        "name": "Big Toe Push",
        "description": "While sitting, use your hand to gently push your big toe in the opposite direction of the bunion."
      },
      "foot-rolls": {
        "name": "Foot Rolls",
        "description": "Roll your foot over a tennis ball or similar object to massage the bottom of your foot."
      }
    }
  }
];

export default function Foot({ onButtonClick, addExerciseToPlan, displayRehab }) {
  return (
    <div>
      {footRehab.map((rehab) => displayRehab(rehab, addExerciseToPlan, "Add to Plan", true))}
      <button onClick={()=>onButtonClick('home')} className={css.homeButton}>Back to Home Page</button>
    </div>
    );
}