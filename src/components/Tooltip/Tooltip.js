import React, { useContext } from 'react';

import { AppContext } from '../../context';

import styles from './Tooltip.module.scss';

const Tooltip = () => {
  const { clipboard } = useContext(AppContext);

  if (clipboard.copied) {
    return <div className={styles.Tooltip}>Copied to clipboard 👍</div>;
  }

  return '';
};

export default Tooltip;
