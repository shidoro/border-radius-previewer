import CircularSlider from '../../CircularSlider/CircularSlider';
import Corner from '../../Corner/Corner';

import styles from './Slide.module.scss';

const Slide = ({ corners, handleChangeCorners }) => {
  return (
    <div className={styles.Corners}>
      <Corner placeholder={corners.placeholder} />
      <CircularSlider
        value={corners.left.value}
        onChange={handleChangeCorners(corners.left.corner)}
      />
      <CircularSlider
        value={corners.right.value}
        onChange={handleChangeCorners(corners.right.corner)}
      />
    </div>
  );
};

export default Slide;
