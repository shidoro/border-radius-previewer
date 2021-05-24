import { COPIED_TO_CLIPBOARD, SET_CORNER, SET_STYLE } from '../types';

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_CORNER:
      return {
        ...state,
        corners: {
          ...state.corners,
          [action.corner]: action.value
        }
      };
    case SET_STYLE:
      const corners = action.corners;
      return {
        ...state,
        style: {
          ...state.style,
          borderRadius: `${corners.topLeftLeft}% ${corners.topRightLeft}% ${corners.bottomRightLeft}% ${corners.bottomLeftLeft}% / ${corners.topLeftRight}% ${corners.topRightRight}% ${corners.bottomRightRight}% ${corners.bottomLeftRight}%`
        }
      };
    case COPIED_TO_CLIPBOARD:
      return {
        ...state,
        clipboard: {
          copied: !state.clipboard.copied
        }
      };

    default:
      return state;
  }
};

export default appReducer;
