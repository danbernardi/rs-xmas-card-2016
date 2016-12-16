import React from 'react';

const RadioGroup  = props => {
  const { answers, onAnswerSelect, id } = props;

  return (
    <ul className="list--block">
      {
        answers.map((answer, index) => (
          <li key={ index }>
            <label className="checkable" htmlFor={ id }>
              <input
                type="radio"
                value={ answer.name }
                defaultChecked={ index === 0 }
                name={ id }
                className="checkable__input"
                onChange={ (event) => onAnswerSelect(answer) }
              />
              <span className="checkable__mark"></span>
              <span className="checkable__label">{ answer.name }</span>
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
