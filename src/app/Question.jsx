import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

const Question = props => {
  const { dispatch, question, answers, color, nextPage, activeSheetID } = props;

  const switchActiveSheet = (targetID) => {
    dispatch(actions.addPreviousSheetID(activeSheetID.current));
    dispatch(actions.setActiveSheetID(targetID));
  }

  return (
    <div className="question__page" style={ { backgroundColor: color } }>
      <div className="row">
        <h1 className="quesiton__label">{ question }</h1>
        <ul className="question__answers mb6">
          { answers.map((a, i) => (
            <li key={i  }>
              { a }
            </li>
          )) }
        </ul>

        <button className="btn" onClick={ () => switchActiveSheet(nextPage) }>{ nextPage }</button>
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
