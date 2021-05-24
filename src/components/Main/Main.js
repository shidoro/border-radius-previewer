import React, { useContext } from 'react';

import Sliders from '../Sliders/Sliders';
import Square from '../Square/Square';

import styles from './Main.module.scss';
import { AppContext } from '../../context';

const Main = () => {
  const { style, corners, updateCornerValue } = useContext(AppContext);

  return (
    <div className={styles.Main}>
      <Sliders corners={corners} handleChangeCorners={updateCornerValue} />
      <Square style={style} />
    </div>
  );
};

export default Main;
