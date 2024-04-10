// components/CertificationCard.js

import React from 'react';

const CertificationCard = ({ title, organization, keywords }) => {
  return (
    <div className="certification-card">
      <h2>Certification</h2>
      <h3>{title}</h3>
      <p>{organization}</p>
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationCard;
