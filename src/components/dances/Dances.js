import React from 'react';
import { Link } from 'gatsby';

import DanceList from './DanceList';

const Dances = () => (
  <section id="dances" className="wrapper style3 fullscreen fade-up">
    <div className="inner">
      <h1>Dance List</h1>

      <div className="features">
        <DanceList />
      </div>
      <ul className="actions">
        <li>
          <Link className="button" to="/generic">
            Learn more
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default Dances;
