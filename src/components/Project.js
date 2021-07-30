import React from 'react';

const Project = ({ name, url, img, centeredImg }) => {
  return (
    <article className={centeredImg ? 'project centeredImg' : 'project'}>
      <img
        src={`/images/${img}`}
        alt={`Picture of my ${name} project`}
        width='250px' //temporary width during development
      />
      <a className='imgLink' href={url}></a>
      <div className='projectInfo'>
        <h3>
          <a className='hover' href={url}>
            {name}
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
  );
};

export default Project;
