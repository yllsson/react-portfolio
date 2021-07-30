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
            src='pics/ylvaBg.png'
            alt='Illustration of Ylva sitting on a ball in a room with plants.'
          />
          <img
            className='justYlva'
            src='pics/justYlva.png'
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

        <article className='project'>
          <img
            src='pics/mdPreviewer.png'
            alt='Screenshot of my Markdown Previewer project'
          />
          <a
            className='imgLink'
            href='https://yllsson.github.io/fcc-markdown-previewer/'
          ></a>
          <div className='projectInfo'>
            <h3>
              <a
                className='hover'
                href='https://yllsson.github.io/fcc-markdown-previewer/'
              >
                Markdown Previewer
              </a>
            </h3>
            <h3>
              <i className='fab fa-react'></i>
              <i className='fab fa-sass'></i>
              <i className='fab fa-html5'></i>
              <i className='fab fa-css3-alt'></i>
              <i className='fab fa-js-square'></i>
            </h3>
          </div>
        </article>

        <article className='project centeredImg'>
          <img
            src='pics/drumMachine.png'
            alt='Screenshot of my Drum Machine project'
          />
          <a
            className='imgLink'
            href='https://yllsson.github.io/fcc-drum-machine/'
          ></a>
          <div className='projectInfo'>
            <h3>
              <a
                className='hover'
                href='https://yllsson.github.io/fcc-drum-machine/'
              >
                Drum Machine
              </a>
            </h3>
            <h3>
              <i className='fab fa-react'></i>
              <i className='fab fa-sass'></i>
              <i className='fab fa-html5'></i>
              <i className='fab fa-css3-alt'></i>
              <i className='fab fa-js-square'></i>
            </h3>
          </div>
        </article>

        <article className='project'>
          <img
            src='pics/rockPaperScissors3.png'
            alt='Picture of my Rock Paper Scissors project'
          />
          <a
            className='imgLink'
            href='https://yllsson.github.io/rockpaperscissors/'
          ></a>
          <div className='projectInfo'>
            <h3>
              <a
                className='hover'
                href='https://yllsson.github.io/rockpaperscissors/'
              >
                Rock Paper Scissors
              </a>
            </h3>
            <h3>
              <i className='fab fa-html5'></i>
              <i className='fab fa-css3-alt'></i>
              <i className='fab fa-js-square'></i>
            </h3>
          </div>
        </article>
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
