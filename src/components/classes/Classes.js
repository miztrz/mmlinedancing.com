import React from 'react';
import { Link } from 'gatsby';

const Classes = () => (
  <section id="class" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Class Timetable</h1>
      <div className="classes-container">

        <span className="classes-item">Name</span>
        <span className="classes-item">Day & Time</span>
        <span className="classes-item">Level</span>
        <span className="classes-item">Location</span>
        <span className="classes-item">Cost</span>
      </div>
    </div>
  </section>
);

export default Classes;