import React from 'react';

const Dance = ({ heading, description, iconClass }) => (
  <section>
    <span className={`icon major ${iconClass}`} />
    <h3>{heading}</h3>
    <p>{description}</p>
  </section>
);

export default Dance;
