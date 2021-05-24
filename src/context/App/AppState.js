import React, { useReducer, createContext, useEffect } from 'react';

import appReducer from './AppReducer';
import { SET_CORNER, SET_STYLE, COPIED_TO_CLIPBOARD } from '../types';

import styles from '../../assets/scss/main.module.scss';

const AppState = ({ children }) => {
  const initialState = {
    style: {
      width: '100%',
      height: '100%',
      margin: '0 auto',
      background: `linear-gradient(to right, ${styles.secondary}, ${styles.primary})`
    },
    corners: {
      topLeftLeft: 30,
      topLeftRight: 30,
      topRightLeft: 70,
      topRightRight: 30,
      bottomRightLeft: 70,
      bottomRightRight: 70,
      bottomLeftLeft: 30,
      bottomLeftRight: 70
    },
    clipboard: {
      copied: false
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    dispatch({ type: SET_STYLE, corners: state.corners });
  }, [state.corners]);

  useEffect(() => {
    if (state.clipboard.copied) {
      setTimeout(() => {
        dispatch({ type: COPIED_TO_CLIPBOARD });
      }, 2000);
    }
  }, [state.clipboard.copied]);

  const updateCornerValue = corner => value => {
    dispatch({ type: SET_CORNER, corner, value });
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(state.style.borderRadius);
    dispatch({ type: COPIED_TO_CLIPBOARD });
  };

  const value = {
    style: state.style,
    corners: state.corners,
    clipboard: state.clipboard,
    updateCornerValue,
    copyToClipBoard
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppContext = createContext();
export default AppState;
