import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

const Question = props => {
  const { dispatch, question, answers, color, nextPage, activeSheetID } = props;

  const switchActiveSheet = (targetID) => {
    dispatch(actions.addPreviousSheetID(activeSheetID.current));
    dispatch(actions.setActiveSheetID(targetID));
  }

  const selectAnswer = (answer, targetID) => {
    switchActiveSheet(targetID);
    dispatch(actions.setAnswerToQuestion(activeSheetID.current, answer));
  }

  return (
    <div className="question__page" style={ { backgroundColor: color } }>
      <div className="row">
        <h1 className="quesiton__label">{ question }</h1>
        <ul className="list--inline question__answers mt2 mb6">
          { answers.map((a, i) => (
            <li style={ { color } } className="mx1" key={i  } onClick={ () => selectAnswer(a, nextPage) }>
              { a }
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}

Question.propTypes = {
  question: React.PropTypes.string,
  answers: React.PropTypes.array,
  color: React.PropTypes.string,
  nextPage: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  activeSheetID: React.PropTypes.object
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID
});

export default connect(injectStateProps)(Question);
