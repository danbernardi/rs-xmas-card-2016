import React from 'react';

const RangeSlider  = props => {
  const { range } = props;

  return (
    <div className="rangeslider">
      <span>{ range[0] }</span>
      <input type="range" min="0" max="10" value="5" step="10" />
      <span>{ range[1] }</span>
    </div>
  );
};

RangeSlider.propTypes = {
  range: React.PropTypes.array
};

RangeSlider.defaultProps = {
  range: ['Naughty', 'Nice']
};

export default RangeSlider;
