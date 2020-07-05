import React from 'react';

const AboutContainer = () => {
  return(
    <div raised className="about-page">
    <h1 className='about-header'>About My Flatiron Final Project</h1>
      <p>This project was designed to teach children about the seven environmental biomes on Earth, including the animals and vegetation that inhabit them.</p>
      <p>Utilizing a custom Rails json API, the backend database was built to securely store and send data about biomes, animals, and plants.</p>
      <p>Implemented React and Redux to handle over 10 states, created 8 routes, and passed information between over 25 components.</p>
      <p>Designed user interface with slider and forms with Semantic UI React, custom CSS, and React Transition Group.</p>
      <p>Used react library Strider to create an interactive quiz.</p>
    </div>
  )
}
export default AboutContainer