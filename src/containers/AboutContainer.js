import React from 'react';

const AboutContainer = () => {
  return(
    <div raised className="about-page">
    <h1 className='about-header'>About My Flatiron Final Project</h1>
      <p>This project was designed to teach children about the seven environmental biomes on Earth and the animals and vegetation that inhabit them.</p>
      <p>I created a custom Rails json API, it was built to securely store and send data about biomes, animals, and plants.</p>
      <p>The frontend in this application uses React and Redux to handle over 10 states, manage 8 routes, and pass information between over 25 components.</p>
      <p>I also followed a tutorial and used a react library called Strider to create an interactive quiz.</p>
      <p>Thank you for stopping by and hope you enjoy my Flatiron Final Project!</p>
    </div>
  )
}
export default AboutContainer