import React from 'react';

const RangeSlider  = props => {
  const { range } = props;


  const dispatchValue = event => {
    const value = event.target.value;
    let answer = props.answers[1];

    if (value < 4) {
      answer = props.answers[0];
    } else if (value > 6) {
      answer = props.answers[2];
    }

    props.onAnswerSelect(answer);
  };

  return (
    <div className="layout--relative rangeslider-component mt10">
      <div className="rangeslider flex-fields">
        <span className="flex-inline rangeslider-label layout--abs_left typ--left">{ range[0] }</span>
        <input className="input__range_slider" type="range" min="1" max="9" defaultValue="5" step="1" onChange={ (event) => dispatchValue(event) } />
        <span className="flex-inline rangeslider-label rangeslider-label-right layout--abs_right">{ range[1] }</span>
      </div>
      <div className="tick-fields flex-fields">
        <span className="flex-inline rangeslider-label layout--abs_left typ--left">{ range[0] }</span>
        <div className="ticks">
          <div className="track"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
          <div className="tick-mark"></div>
        </div>
        <span className="flex-inline rangeslider-label rangeslider-label-right layout--abs_right">{ range[1] }</span>
      </div>
    </div>
  );
};

RangeSlider.propTypes = {
  range: React.PropTypes.array,
  onAnswerSelect: React.PropTypes.func,
  answers: React.PropTypes.array
};

RangeSlider.defaultProps = {
  range: ['Naughty', 'Nice']
};

export default RangeSlider;
