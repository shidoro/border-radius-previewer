import React from 'react';

const Keyframes = props => {
  const toCss = cssObject => {
    if (typeof cssObject === 'string') return cssObject;

    return Object.keys(cssObject).reduce((acc, key) => {
      const cssKey = key.replace(/[A-Z]/g, v => `-${v.toLowerCase()}`);
      const cssValue = cssObject[key].toString().replace("'", '');
      return `${acc}${cssKey}: ${cssValue};`;
    }, '');
  };

  const keyframe = props => {
    return `@keyframes ${props.name} {
        ${Object.keys(props)
          .map(key => {
            return ['from', 'to'].includes(key)
              ? `${key} { ${toCss(props[key])} }`
              : /^_\d+$/.test(key)
              ? `${key.replace('_', '')}% { ${toCss(props[key])} }`
              : '';
          })
          .join(' ')}
    }`;
  };

  return <style>{keyframe(props)}</style>;
};

export default Keyframes;
