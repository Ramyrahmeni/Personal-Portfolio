// src/components/CardStack.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import genai from'../assets/genai.svg'
import deepLearningIcon from '../assets/noun-neural-network-3339036.svg';
import nlpicon from'../assets/noun-natural-language-processing-6639439.svg'
import cvicon from '../assets/noun-computer-vision-6647979 (1).svg'
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
import reactsv from '../assets/react.svg';

console.log('Deep Learning Icon imported successfully:', deepLearningIcon);

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next line */
  gap: 20px;
  padding: 20px;
`;

const CardWrapper = styled.div`
  flex: 1 0 300px; /* Take full available width, but limit to 300px */
  background-color: #f0f0f0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #333;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateX(-100%);
  transition: transform 0.5s, opacity 0.5s;
  cursor: pointer;
  padding: 20px;

  &:hover {
    transform: translateX(0);
  }

  @media screen and (max-width: 768px) {
    flex-basis: calc(50% - 20px); /* Two cards per row */
  }

  @media screen and (max-width: 576px) {
    flex-basis: calc(100% - 20px); /* One card per row */
  }
`;

const CardText = styled.p`
  text-align: center;
  padding: 15px;
`;

const CardIcon = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const AreasOfInterests = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        x: 0,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <div className='interest-container'>
    <h1 className='interestheader' style={{
    fontSize: '100px',
    textAlign: 'center',
    margin: '0',
    fontWeight: '600',
    color: 'var(--faded-header)'
  }}>
    Areas Of Interest
  </h1>
    <CardContainer>
      <CardWrapper className="card">
        <CardIcon src={cvicon} alt="Computer Vision" />
        <CardText>
          <strong>Computer Vision</strong>
          <br />
          Empowering machines to see and interpret visual data.
        </CardText>
      </CardWrapper>
      <CardWrapper className="card">
        <CardIcon src={nlpicon} alt="NLP" />
        <CardText>
          <strong>NLP (Natural Language Processing)</strong>
          <br />
          Bridging the gap between humans and machines through language.
        </CardText>
      </CardWrapper>
      <CardWrapper className="card">
        <CardIcon src={deepLearningIcon} alt="Deep Learning" />
        <CardText>
          <strong>Deep Learning</strong>
          <br />
          Neural networks, patterns, and sci-fi dreams come true.
        </CardText>
      </CardWrapper>
      <CardWrapper className="card">
        <CardIcon src={genai} alt="RAG" />
        <CardText>
          <strong>RAG (Retrieve, Analyze, Generate)</strong>
          <br />
          Crafting context-aware responses like chat-savvy librarians.
        </CardText>
      </CardWrapper>
      {/* Add more cards here */}
    </CardContainer>
    </div>
  );
};

export default AreasOfInterests;
