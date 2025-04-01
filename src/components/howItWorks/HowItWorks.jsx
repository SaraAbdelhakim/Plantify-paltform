import React from "react";
import "./HowItWorks.scss"


const steps = [
    {
      id: 1,
      image: "/img/snake-plant-beige-pot-by-wall.jpg",
      title: "Step 1: Create a Request",
      description: "Plant owners post requests for plant care with specific dates and plant details.",
    },
    {
      id: 2,
      image: "/img/still-life-with-indoor-plants.jpg",
      title: "Step 2: Find a Sitter",
      description: "Sitters browse open requests and accept the ones that fit their schedule.",
    },
    {
      id: 3,
      image: "/img/elegant-plants-decoration-vase.jpg",
      title: "Step 3: Relax & Enjoy",
      description: "Owners relax while sitters take care of the plants with love and care.",
    },
  ];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>

      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`how-it-works-container ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          {/* Image */}
          <div className="how-it-works-image">
            <img src={step.image} alt={step.title} />
          </div>

          {/* Text */}
          <div className="how-it-works-text">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowItWorks;
