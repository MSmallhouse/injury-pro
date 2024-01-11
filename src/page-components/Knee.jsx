import React from "react";
import css from "../styles/Main.module.css";

const kneeRehab = [{
    "name": "ACL Tear",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/acl%20tear.jpg?v=1701645095218",
    "description": "The anterior cruciate ligament (ACL) is one of the key ligaments that help stabilize the knee joint. An ACL tear is a common knee injury, particularly in athletes who engage in high-demand sports like soccer, basketball, and football. This injury typically occurs when there is a sudden stop or change in direction, causing the ACL to stretch or tear. It can also result from a direct impact to the knee. Symptoms of an ACL tear include a popping noise at the time of injury, severe pain, swelling, loss of full range of motion, and a feeling of instability or 'giving way' when bearing weight. Diagnosis is usually confirmed through physical examination and imaging tests such as MRI. Treatment can vary depending on the severity of the tear and the patient’s activity level. Options include rest, ice, compression, and elevation (RICE), physical therapy, and in more severe cases, surgical reconstruction of the ligament.",
    "strengthening": {
      "quad-sets": {
        "name": "Quad Sets",
        "description": "Sit with your leg straight and tighten your thigh muscles, pressing the back of your knee down into the floor. Hold for 5 seconds, then release."
      },
      "straight-leg-raises": {
        "name": "Straight Leg Raises",
        "description": "Lie on your back, bend one knee and keep the other leg straight. Raise the straight leg about 6 inches off the ground and hold for a few seconds, then lower slowly."
      },
      "hamstring-curls": {
        "name": "Hamstring Curls",
        "description": "Stand and hold onto a chair for balance. Slowly bend your knee as far as you can, then slowly lower your leg back down."
      }
    },
    "stretching": {
      "heel-slide": {
        "name": "Heel Slide",
        "description": "Lie on your back, slowly slide your heel toward your buttocks while keeping your heel on the ground. Hold when you feel a gentle stretch, then slide back."
      },
      "knee-to-chest-stretch": {
        "name": "Knee-to-Chest Stretch",
        "description": "Lie on your back, gently pull one knee up to your chest until you feel a stretch in the lower back and thigh."
      },
      "calf-stretch": {
        "name": "Calf Stretch",
        "description": "Stand facing a wall. Step one foot back and press your heel into the ground while bending your front knee slightly."
      }
    }
  },
  {
    "name": "Meniscus Tear",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/meniscus%20tear.jpg?v=1701645135267",
    "description": "The meniscus is a C-shaped piece of cartilage that acts as a cushion between the femur (thigh bone) and tibia (shin bone). A meniscus tear is a common injury that can occur due to forceful twisting or rotation of the knee, especially while bearing weight. It's prevalent in contact sports and also in older adults due to degenerative changes in the knee. Symptoms include pain, swelling, stiffness, a catching or locking sensation in the knee, and difficulty straightening the knee fully. Diagnosis is typically through a clinical examination and confirmed by an MRI scan. Treatment varies based on the size and location of the tear, age, activity level, and overall health. It can range from conservative methods like rest, physical therapy, and anti-inflammatory medications to surgical procedures like meniscectomy (removal of part of the meniscus) or meniscus repair.",
    "strengthening": {
      "mini-squats": {
        "name": "Mini Squats",
        "description": "Stand with feet shoulder-width apart and slowly squat down about 45 degrees. Hold for a few seconds, then stand back up."
      },
      "step-ups": {
        "name": "Step-Ups",
        "description": "Step up onto a low step or platform, then step back down. Repeat, leading with the other leg."
      },
      "leg-presses": {
        "name": "Leg Presses",
        "description": "Using a leg press machine at a low weight, press with your feet flat and knees aligned over your toes."
      }
    },
    "stretching": {
      "hamstring-stretch": {
        "name": "Hamstring Stretch",
        "description": "Sit on the ground with one leg outstretched, gently lean forward until you feel a stretch at the back of your thigh."
      },
      "quad-stretch": {
        "name": "Quad Stretch",
        "description": "While standing, pull your foot towards your buttocks, holding your ankle."
      },
      "it-band-stretch": {
        "name": "IT Band Stretch",
        "description": "Stand and cross one leg behind the other. Lean to the opposite side until you feel a stretch along the outer thigh."
      }
    }
  },
  {
    "name": "Patellofemoral Pain Syndrome",
    "img": "https://cdn.glitch.global/749b4095-68ac-452d-b6f9-1c6154f1f2d8/runners%20knee.jpg?v=1701645173233",
    "description": "Patellofemoral pain syndrome, also known as runner's knee, is characterized by pain around the patella (kneecap). It is often caused by overuse, especially in sports that involve running and jumping. This condition can also result from a misalignment of the kneecap, flat feet, or muscular imbalances. Symptoms include pain in the front of the knee, especially when sitting with bent knees, squatting, jumping, or using stairs. There's often a feeling of grinding or clicking when moving the knee. Diagnosis typically involves a physical examination, and sometimes imaging tests to rule out other conditions. Treatment focuses on pain relief and addressing the underlying causes. This may include rest, ice, physical therapy exercises to strengthen the muscles around the knee, and in some cases, orthotics for foot support. Avoiding activities that aggravate the condition is also recommended during recovery.",
    "strengthening": {
      "clamshells": {
        "name": "Clamshells",
        "description": "Lie on your side with knees bent. Keeping feet together, open your top knee like a clamshell, then close it. Repeat several times."
      },
      "side-lying-leg-lifts": {
        "name": "Side-Lying Leg Lifts",
        "description": "Lie on your side with your legs stacked. Lift the top leg up while keeping it straight, then lower it slowly."
      },
      "bridge": {
        "name": "Bridge",
        "description": "Lie on your back with knees bent and feet flat on the ground. Lift your hips to create a straight line from knees to shoulders."
      }
    },
    "stretching": {
      "hip-flexor-stretch": {
        "name": "Hip Flexor Stretch",
        "description": "Kneel on one knee, the other foot in front. Push your hips forward until you feel a stretch in the front of your hip."
      },
      "butterfly-stretch": {
        "name": "Butterfly Stretch",
        "description": "Sit with the soles of your feet together and knees out to the sides. Gently press your knees down with your elbows."
      },
      "calf-and-achilles-stretch": {
        "name": "Calf and Achilles Stretch",
        "description": "Stand facing a wall, place one foot behind the other, and gently lean into the wall, keeping the back heel on the ground."
      }
    }
  }
];

export default function Knee({ onButtonClick, addExerciseToPlan, displayRehab }) {
  return (
    <div>
      {kneeRehab.map((rehab) => displayRehab(rehab, addExerciseToPlan, "Add to Plan", true))}
      <button onClick={()=>onButtonClick('home')} className={css.homeButton}>Back to Home Page</button>
    </div>
    );
}