import React from 'react';
import Header from '../components/navigation/Header';
import Project from '../components/project/Project';
import Social from '../components/Social';

const Portfolio = () => {
  return (
    <>
      <Header/>
    <div className="project-container">
      <Project/>
    </div>
      <Social/>
    </>
  );
};

export default Portfolio;
