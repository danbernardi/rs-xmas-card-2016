import React from 'react';

const RadioGroup  = props => {
  const { answers, onAnswerSelect, id } = props;

  return (
    <ul className="checkable__group list--block typ--left col-center">
      {
        answers.map((answer, index) => (
          <li key={ index }>
            <label className="checkable" htmlFor={ id }>
              <input
                type="radio"
                value={ answer.name }
                name={ id }
                className="checkable__input"
                onChange={ () => onAnswerSelect(answer) }
              />
              <span
                className="checkable__mark"
                onClick={ () => { onAnswerSelect(answer) } }
              />
              <span
                className="checkable__label typ--h6"
                onClick={ () => { onAnswerSelect(answer) } }
              >
                { answer.name }
              </span>
            </label>
          </li>
        ))
      }
    </ul>
  );
};

RadioGroup.propTypes = {
  onAnswerSelect: React.PropTypes.func,
  answers: React.PropTypes.array,
  id: React.PropTypes.string
};

RadioGroup.defaultProps = {
  id: 'snow'
};

export default RadioGroup;
