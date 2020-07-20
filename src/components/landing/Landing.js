import React from 'react';
import Scroll from '../common/Scroll';

const Landing = () => (
  <section id="land" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>MM Line Dancing</h1>
      <p>Line dance classes with Michelle</p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>
);

export default Landing;
