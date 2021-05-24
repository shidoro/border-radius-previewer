import React from 'react';

import styles from './Corner.module.scss';

const Corner = ({ placeholder }) => {
  return (
    <div className={styles.Corner} style={{ ...placeholder }}>
      <div className={styles.innerCorner}></div>
    </div>
  );
};

export default Corner;
