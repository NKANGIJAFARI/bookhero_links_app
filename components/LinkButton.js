import React from 'react';
import styles from '../styles/Home.module.css';

const LinkButton = ({ link, desc }) => {
  return (
    <a href={link} className={styles.card}>
      <h2>{desc}</h2>
    </a>
  );
};

export default LinkButton;
