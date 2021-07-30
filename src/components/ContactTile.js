import React from 'react';

const ContactTile = ({ text, url, iconName }) => {
  return (
    <a className='contact-link' href={url} target='_blank'>
      <i className={`${iconName}`}></i>
      <span>{text}</span>
    </a>
  );
};

export default ContactTile;
