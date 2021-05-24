import React from 'react';

import { CircleSlider } from 'react-circle-slider';
import styles from '../../assets/scss/main.module.scss';

const CircularSlider = ({
  value,
  size,
  progressWidth,
  tooltipSize,
  circleWidth,
  knobRadius,
  gradientColorFrom,
  gradientColorTo,
  knobColor,
  tooltipColor,
  circleColor,
  showTooltip,
  ...props
}) => {
  return (
    <CircleSlider
      value={value}
      showTooltip={!showTooltip ? true : false}
      size={size || 90}
      progressWidth={progressWidth || 10}
      tooltipSize={tooltipSize || 20}
      circleWidth={circleWidth || 3}
      knobRadius={knobRadius || 10}
      gradientColorFrom={gradientColorFrom || styles.secondary}
      gradientColorTo={gradientColorTo || styles.primary}
      knobColor={knobColor || styles.knob}
      tooltipColor={tooltipColor || '#ddd'}
      circleColor={circleColor || '#ddd'}
      {...props}
    />
  );
};

export default CircularSlider;
