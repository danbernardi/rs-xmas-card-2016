import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import RangeSlider from './components/RangeSlider';

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

  const getFormComponent = formComponent => ({
    rangeslider: <RangeSlider />
  }[formComponent]);

  return (
    <div className="question__page">
      <div className="row">
        <h1 className="quesiton__label typ--center">{ question }</h1>

        { getFormComponent('rangeslider') }


        {/* <ul className="list--inline question__answers mt2 mb6">
          { answers.map((a, i) => (
            <li style={ { color } } className="mx1" key={i  } onClick={ () => selectAnswer(a, nextPage) }>
              { a }
            </li>
          )) }
        </ul> */}

        <div className="typ--center mt10">
          <button className="btn btn--ghost">Next</button>
        </div>
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
