import React from 'react';
import Project from './Project';
import projectsData from '../data/projectsData';

const Portfolio = () => {
  return (
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
          <a
            className='contact-link active'
            href='https://twitter.com/yllsson'
            target='_blank'
          >
            <i className='fab fa-twitter'></i>
            <span>@yllsson</span>
          </a>
          <a
            className='contact-link'
            href='https://github.com/yllsson'
            target='_blank'
          >
            <i className='fab fa-github'></i>
            <span>yllsson</span>
          </a>
          <a
            className='contact-link'
            href='mailto:ylvaeturner@gmail.com'
            target='_blank'
          >
            <i className='fas fa-envelope'></i>
            <span>ylvaeturner@gmail.com</span>
          </a>
          <a
            className='contact-link'
            href='https://www.linkedin.com/in/ylva-turner/'
            target='_blank'
          >
            <i className='fab fa-linkedin'></i>
            <span>Ylva Turner</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
