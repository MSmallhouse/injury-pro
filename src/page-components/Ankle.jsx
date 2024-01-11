import React from "react";
import css from "../styles/Main.module.css";

const ankleRehab = [{
    "name": "Ankle Instability",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/Ankle-Instability.jpg?v=1701642727989",
    "description": "Ankle instability is a chronic condition characterized by a recurrent slipping of the outer side of the ankle. It often develops after repeated ankle sprains, particularly if they were not completely healed or rehabilitated. The ligaments in the ankle become stretched or torn, leading to a sensation of the ankle 'giving way,' especially on uneven surfaces or during sports activities. Symptoms include repeated ankle sprains, persistent discomfort and swelling, tenderness, and a wobbly feeling in the ankle. Treatment typically involves physical therapy to strengthen the muscles around the ankle and improve balance and coordination. In some cases, wearing an ankle brace can help stabilize the area, and surgery may be necessary to repair or reconstruct the damaged ligaments.",
    "strengthening": {
      "ankle-dorsiflexion": {
        "name": "Ankle Dorsiflexoin",
        "description": "Sit with your legs extended. Wrap a resistance band around your foot and gently pull the toes towards you."
      },
      "heel-raises": {
        "name": "Heel Raises",
        "description": "Stand with your feet hip-width apart and slowly raise your heels, standing on your toes. Hold, then slowly lower back down.Stand with your feet hip-width apart and slowly raise your heels, standing on your toes. Hold, then slowly lower back down."
      },
      "toe-curls": {
        "name": "Toe Curls",
        "description": "Place a small towel on the floor and use your toes to scrunch it towards you."
      },
    },
    "stretching": {
      "calf-stretch": {
        "name": "Calf Stretch",
        "description": "Stand facing a wall. Place one foot behind you, keeping it flat on the ground, and lean forward against the wall."
      },
      "towel-stretch": {
        "name": "Towel Stretch",
        "description": "Sit with your leg stretched out in front of you. Wrap a towel around the ball of your foot and gently pull towards you, keeping your knee straight."
      },
      "ankle-circles": {
        "name": "Ankle Circles",
        "description": "Rotate your ankle clockwise and then counter-clockwise, focusing on full, controlled motions."
      }
    }
  },
  {
    "name": "Achilles Tendinitis",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/achilles%20tendinitis.jpg?v=1701642840685",
    "description": "Achilles tendinitis is an overuse injury of the Achilles tendon, the band of tissue that connects calf muscles at the back of the lower leg to your heel bone. It's common in runners and middle-aged people who play sports only on the weekends. Symptoms include pain and stiffness along the Achilles tendon in the morning, severe pain the day after exercising, and thickening of the tendon. The pain is usually more severe during and after activity, and the tendon may be swollen or tender to the touch. Treatment typically involves rest, ice, compression, and elevation (RICE), along with exercises to strengthen the calf muscles. In more severe cases, physical therapy or orthotics may be recommended.",
    "strengthening": {
      "eccentric-heel-drop": {
        "name": "Eccentric Heel Drop",
        "description": "Stand on the edge of a step and slowly lower your heels below the level of the step, then raise back up."
      },
      "seated-calf-raises": {
        "name": "Seated Calf Raises",
        "description": "Sit with your feet flat on the floor and lift your heels as high as possible, keeping your toes on the ground."
      },
      "calf-raises": {
        "name": "Calf Raises",
        "description": "Similar to the heel drop but done on flat ground, lifting your heels up as high as possible."
      }
    },
    "stretching": {
      "calf-stretch": {
        "name": "Calf Stretch (as above)",
        "description": "Stand facing a wall. Place one foot behind you, keeping it flat on the ground, and lean forward against the wall."
      },
      "seated-towel-stretch": {
        "name": "Seated Towel Stretch (as above)",
        "description": "Sit with your leg stretched out in front of you. Wrap a towel around the ball of your foot and gently pull towards you, keeping your knee straight."
      },
      "standing-achilles-stretch": {
        "name": "Standing Achilles Stretch",
        "description": "Lean forward against a wall with one foot behind the other. Bend the front knee and keep the back knee straight, with the heel grounded."
      }
    }
  },
  {
    "name": "Posterior Tibial Tendon Dysfunction (PTTD)",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/PTTD.jpg?v=1701642894446",
    "description": "Posterior Tibial Tendon Dysfunction (PTTD) is a condition where changes in the tendon impair its ability to support the arch, resulting in flattening of the foot. It's more common in adults over 40 and can occur from overuse or as a result of injury. Symptoms include pain and swelling along the inside of the ankle, loss of the arch, and an outward rolling of the ankle. As PTTD progresses, it can become difficult to walk or stand for long periods. Treatment includes rest, ice, and anti-inflammatory medications in the early stages. Orthotics, braces, and physical therapy can help support the foot and prevent further flattening. In advanced cases, surgery may be necessary.",
    "strengthening": {
      "arch-lifts": {
        "name": "Arch Lifts",
        "description": "Stand with your feet flat on the ground. Lift the arch of your foot while keeping your toes and heel on the ground."
      },
      "toe-raises": {
        "name": "Toe Raises",
        "description": "While sitting, lift your toes up as high as you can, keeping your heel on the ground."
      },
      "ankle-inversion": {
        "name": "Ankle Inversion",
        "description": "Using a resistance band, pull your foot inward against the resistance, then slowly return to the starting position."
      }
    },
    "stretching": {
      "towel-stretch": {
        "name": "Towel Stretch",
        "description": "Place a small towel on the floor. Sit with your legs extended and wrap the towel around the ball of your foot. Gently pull the toes towards you."
      },
      "calf-stretch": {
        "name": "Calf Stretch (as above)",
        "description": "Stand facing a wall. Place one foot behind you, keeping it flat on the ground, and lean forward against the wall."
      },
      "plantar-fascia-stretch": {
        "name": "Plantar Fascia Stretch",
        "description": "Sit and cross one foot over your knee. Pull the toes back towards your shin until you feel a stretch in the arch of your foot."
      }
    }   
  }
];

export default function Ankle({ onButtonClick, addExerciseToPlan, displayRehab }) {

  return (
    <div>
      {ankleRehab.map((rehab) => displayRehab(rehab, addExerciseToPlan, "Add to Plan", true))}
      <button onClick={()=>onButtonClick('home')} className={css.homeButton}>Back to Home Page</button>
    </div>
    );
}