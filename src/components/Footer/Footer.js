import React, { useContext } from 'react';

import { AppContext } from '../../context';

import styles from './Footer.module.scss';

const Footer = () => {
  const { style, copyToClipBoard } = useContext(AppContext);

  return (
    <div className={styles.Footer}>
      <h3>Border radius:</h3>
      <span>{style.borderRadius}</span>
      <button className={styles.button} onClick={copyToClipBoard}>
        COPY
      </button>
    </div>
  );
};

export default Footer;
