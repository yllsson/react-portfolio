import React from 'react';
import Project from './Project';
import ContactTile from './ContactTile';
import projectsData from '../data/projectsData';
import contactData from '../data/contactData';
import Header from './Header';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <main className='container'>
        <section className='title' id='title'>
          <div className='titleHeaders' id='titleHeaders'>
            <h1>Ylva Turner</h1>
            <h2>Web Developer</h2>
          </div>

          <div className='titleImages' id='titleImages'>
            <img
              className='ylvaBg'
              src='/images/ylvaBg.png'
              alt='Illustration of Ylva sitting on a ball in a room with plants.'
            />
            <img
              className='justYlva'
              src='images/justYlva.png'
              alt='Illustration of Ylva sitting on a ball in a room with plants.'
            />
          </div>
        </section>

        <section className='projects'>
          <h2 id='projects'>Projects</h2>

          {projectsData.map((project, idx) => (
            <Project
              name={project.name}
              url={project.url}
              img={project.img}
              centeredImg={project.centeredImg}
              key={idx}
            />
          ))}
        </section>

        <section className='contact' id='contact'>
          <h2>Let's have a chat!</h2>

          <div className='contact-links'>
            {contactData.map((contactTile, idx) => (
              <ContactTile
                text={contactTile.text}
                url={contactTile.url}
                iconName={contactTile.iconName}
                key={idx}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
