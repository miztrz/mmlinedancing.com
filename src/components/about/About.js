import React from 'react';
import { Link } from 'gatsby';

const About = () => (
  <section id="about" className="wrapper style2 fullscreen fade-up">
    <div className="inner">
      <h1>About Me</h1>
      <p>
        Michelle first started line dancing in 1994. In 2002, Michelle entered
        her first WA Stomp competition. It was then in January 2006 that
        Michelle made her way over to Tamworth, NSW competing in what was at the
        time, the biggest competition in the country the Australian Line Dance
        Championships.
      </p>
      <p>
        More recently during the COVID-19 pandemic, Michelle has been attending
        online technique workshops held by the World Dance Masters, learning the
        tricks of the trade in the various line dance styling of East Coast
        Swing and Polka.
      </p>
      <ul className="actions">
        <li>
          <Link className="button" to="#class">
            Class Timetable
          </Link>
        </li>
        <li>
          <Link className="button" to="#dances">
            Dance List
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default About;
