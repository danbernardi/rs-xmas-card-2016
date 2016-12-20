import React from 'react';

const RadioGroup  = props => {
  const { answers, onAnswerSelect, id } = props;

  const onSelect = (answer, index) => {
    const label = document.getElementById(`checkable-${index}`);
    label.firstChild.setAttribute('checked', true);
    onAnswerSelect(answer);
  };

  return (
    <ul className="checkable__group list--block typ--left col-center">
      {
        answers.map((answer, index) => (
          <li key={ index } onClick={ () => { onSelect(answer, index) } }>
            <label
              className="checkable"
              htmlFor={ id }
              onClick={ () => { onSelect(answer, index) } }
              id={ `checkable-${index}` }
            >
              <input
                type="radio"
                value={ answer.name }
                name={ id }
                className="checkable__input"
                onChange={ () => onSelect(answer, index) }
              />
              <span
                className="checkable__mark"
                onClick={ () => { onSelect(answer, index) } }
              />
              <span
                className="checkable__label typ--h6"
                onClick={ () => { onSelect(answer, index) } }
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
