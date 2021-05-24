import React, { useContext } from 'react';
import { AppContext } from '../../context';
import Keyframes from '../Keyrfame/Keyframes';

import styles from './Background.module.scss';

const Background = () => {
  const { style } = useContext(AppContext);

  if (style.borderRadius) {
    return (
      <div className={styles.Background}>
        <div
          className={styles.big}
          style={{
            animation: 'spin 30s linear infinite, morph 15s linear infinite',
            borderRadius: style.borderRadius
          }}
        >
          <Keyframes
            name="morph"
            _0={{ left: '-20vmin', top: '-20vmin' }}
            _25={{ left: '-20vmin', top: '-35vmin' }}
            _50={{ left: '-25vmin', top: '-25vmin' }}
            _75={{ left: '-15vmin', top: '-15vmin' }}
            _100={{ left: '-20vmin', top: '-20vmin' }}
          />
          <Keyframes
            name="spin"
            from={{ transform: `rotate(0deg)` }}
            to={{ transform: `rotate(360deg)` }}
          />
        </div>
        <div
          className={styles.small}
          style={{
            animation: 'spin 30s linear infinite, morph2 15s linear infinite',
            borderRadius: style.borderRadius
          }}
        >
          <Keyframes
            name="morph2"
            _0={{ left: '75%', top: '10%' }}
            _25={{ left: '70%', top: '15%' }}
            _50={{ left: '65%', top: '15%' }}
            _75={{ left: '70%', top: '10%' }}
            _100={{ left: '75%', top: '10%' }}
          />
          <Keyframes
            name="spin"
            from={{ transform: `rotate(0deg)` }}
            to={{ transform: `rotate(360deg)` }}
          />
        </div>
      </div>
    );
  }

  return '';
};

export default Background;
