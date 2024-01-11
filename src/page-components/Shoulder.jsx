import React from "react";
import css from "../styles/Main.module.css";

const shoulderRehab = [{
    "name": "Rotator Cuff Tear",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/rotator%20cuff%20tear.jpg?v=1701645715599",
    "description": "A rotator cuff tear involves a tear in one or more of the tendons of the four rotator cuff muscles in the shoulder. These muscles and tendons stabilize the shoulder and allow for a wide range of arm movements. This injury can result from a single traumatic event or from repetitive, overhead motions. Symptoms include pain at rest and at night, particularly if lying on the affected shoulder, weakness when lifting or rotating the arm, and a crackling sensation when moving the shoulder in certain positions. There are two types of tears: a partial tear, which damages the soft tissue but does not completely sever it, and a full-thickness tear, which splits the soft tissue into two pieces. Treatment options vary based on the severity of the tear and the patient’s lifestyle, ranging from physical therapy and anti-inflammatory medication to surgical repair.",
    "strengthening": {
      "internal-rotation": {
        "name": "Internal Rotation",
        "description": "Using a resistance band attached to a door handle, stand sideways next to the door. Keep your elbow at a 90-degree angle and pull the band towards your waist."
      },
      "external-rotation": {
        "name": "External Rotation",
        "description": "Similar setup as internal rotation, but pull the band away from your body while keeping your elbow at your side."
      },
      "shoulder-scapton": {
        "name": "Shoulder Scaption",
        "description": "Hold light weights in each hand, raise your arms at a 45-degree angle from your sides, thumbs up, up to shoulder height."
      }
    },
    "stretching": {
      "pendulum-stretch": {
        "name": "Pendulum Stretch",
        "description": "Lean over slightly and let your affected arm hang down. Swing the arm gently in small circles."
      },
      "cross-body-reach": {
        "name": "Cross-Body Reach",
        "description": "Reach your injured arm across your body, gently pressing on your elbow with your other hand."
      },
      "doorway-stretch": {
        "name": "Doorway Stretch",
        "description": "Stand in a doorway with your arms out and your elbows at a 90-degree angle. Gently press forward until you feel a stretch in the shoulders."
      }
    }
  },
  {
    "name": "Frozen Shoulder (Adhesive Capsulitis)",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/frozen%20shoulder.jpg?v=1701645744570",
    "description": "Frozen shoulder, or adhesive capsulitis, is characterized by stiffness and pain in the shoulder joint. Its causes are largely unknown, but it typically develops after prolonged immobility or a minor injury. The condition tends to worsen over time and then resolves, usually within one to three years. It has three stages: the freezing stage, where pain increases gradually and the shoulder becomes less mobile; the frozen stage, where pain might diminish but the shoulder becomes stiffer; and the thawing stage, where the range of motion begins to improve. Treatment includes physical therapy, medications to reduce pain and inflammation, and sometimes corticosteroid injections. In severe cases, surgery may be necessary to loosen the joint capsule.",
    "strengthening": {
      "shoulder-blade-squeeze": {
        "name": "Shoulder Blade Squeeze",
        "description": "Sit or stand with your arms at your sides. Squeeze your shoulder blades together, hold for a few seconds, then release."
      },
      "arm-slide": {
        "name": "Arm Slide",
        "description": "Stand facing a wall with your palms against it. Slowly slide your arms upward."
      }
    },
    "stretching": {
      "towel-stretch": {
        "name": "Towel Stretch",
        "description": "Hold a towel with both hands behind your back. Use your good arm to gently pull the affected arm upward."
      },
      "pendulum-stretch": {
        "name": "Pendulum Stretch",
        "description": "Lean over slightly and let your affected arm hang down. Swing the arm gently in small circles."
      },
      "arm-crossover": {
        "name": "Arm Crossover",
        "description": "Gently pull one arm across your chest just below your chin, stretching the shoulder."
      }
    }
  },
  {
    "name": "Shoulder Impingement",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/shoulder%20impingement.jpg?v=1701645768014",
    "description": "Shoulder impingement syndrome occurs when the tendons of the rotator cuff muscles become irritated and inflamed as they pass through the subacromial space, the narrow passage beneath the acromion (part of the shoulder blade). It often results from repetitive overhead activity, lifting, or other movements that cause pinching of the rotator cuff tendons. Symptoms include pain when lifting the arm, weakness, and pain when lying on the affected side. Early treatment is critical to relieve pain and prevent further damage. Treatment includes rest, ice, anti-inflammatory medications, and physical therapy. In some cases, a corticosteroid injection may be given, and if conservative treatments don't work, surgery might be needed to create more space for the rotator cuff.",
    "strengthening": {
      "lateral-arm-raises": {
        "name": "Lateral Arm Raises",
        "description": "Stand with your arms at your sides, then slowly lift your arms out to the sides, up to shoulder height."
      },
      "front-arm-raises": {
        "name": "Front Arm Raises",
        "description": "Similar to lateral raises, but lift your arms in front of you."
      },
      "prone-horizontal-abduction": {
        "name": "Prone Horizontal Abduction",
        "description": "Lie on your stomach with your arms outstretched, lift your arms up and out to the sides with your thumbs pointing upward."
      }
    },
    "stretching": {
      "pendulum-stretch": {
        "name": "Pendulum Stretch",
        "description": "Lean over slightly and let your affected arm hang down. Swing the arm gently in small circles."
      },
      "doorway-stretch": {
        "name": "Doorway Stretch",
        "description": "Stand in a doorway with your arms out and your elbows at a 90-degree angle. Gently press forward until you feel a stretch in the shoulders."
      },
      "neck-and-shoulder-release": {
        "name": "Neck and Shoulder Release",
        "description": "Tilt your head to one side, stretching the neck and shoulder muscles on the opposite side. Repeat on the other side."
      }
    }
  }
];

export default function Shoulder({ onButtonClick, addExerciseToPlan, displayRehab }) {
  return (
    <div>
      {shoulderRehab.map((rehab) => displayRehab(rehab, addExerciseToPlan, "Add to Plan", true))}
      <button onClick={()=>onButtonClick('home')} className={css.homeButton}>Back to Home Page</button>
    </div>
    );
}