import Slide from './Slide/Slide';

import styles from './Sliders.module.scss';

const Sliders = ({ corners, handleChangeCorners }) => {
  return (
    <div className={styles.Sliders}>
      <Slide
        corners={{
          left: { value: corners.topLeftLeft, corner: 'topLeftLeft' },
          right: { value: corners.topLeftRight, corner: 'topLeftRight' }
        }}
        handleChangeCorners={handleChangeCorners}
      />
      <Slide
        corners={{
          left: { value: corners.topRightLeft, corner: 'topRightLeft' },
          right: { value: corners.topRightRight, corner: 'topRightRight' },
          placeholder: { justifyContent: 'flex-end' }
        }}
        handleChangeCorners={handleChangeCorners}
      />
      <Slide
        corners={{
          left: { value: corners.bottomRightLeft, corner: 'bottomRightLeft' },
          right: {
            value: corners.bottomRightRight,
            corner: 'bottomRightRight'
          },
          placeholder: { justifyContent: 'flex-end', alignItems: 'flex-end' }
        }}
        handleChangeCorners={handleChangeCorners}
      />
      <Slide
        corners={{
          left: { value: corners.bottomLeftLeft, corner: 'bottomLeftLeft' },
          right: { value: corners.bottomLeftRight, corner: 'bottomLeftRight' },
          placeholder: { alignItems: 'flex-end' }
        }}
        handleChangeCorners={handleChangeCorners}
      />
    </div>
  );
};

export default Sliders;
