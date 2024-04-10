// CardCarousel.js

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'; // Import styled-components
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ cardData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cards = container.querySelectorAll('.card');

    const totalWidth = Array.from(cards).reduce(
      (acc, card) => acc + card.clientWidth,
      0
    );

    const tl = gsap.timeline({
      repeat: -1,
      onUpdate: () => {
        const scrollX = tl.progress() * totalWidth;
        container.scrollLeft = scrollX;
      },
    });

    tl.to(container, {
      x: -totalWidth,
      duration: 10,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      animation: tl,
      scrub: true,
    });
  }, []);

  return (
    <StyledCardCarousel ref={containerRef}>
      {cardData.map((card, index) => (
        <StyledCard key={index}>
          <img src={card.imageUrl} alt={card.title} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link}>Learn More</a>
          </div>
        </StyledCard>
      ))}
    </StyledCardCarousel>
  );
};

const StyledCardCarousel = styled.div`
  display: flex;
  overflow-x: hidden;
  /* Add any other styling for the carousel container */
`;

const StyledCard = styled.div`
  flex: 0 0 auto;
  width: 300px; /* Adjust card width as needed */
  margin-right: 20px; /* Add spacing between cards */
  /* Add any other styling for individual cards */
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default Projects;
