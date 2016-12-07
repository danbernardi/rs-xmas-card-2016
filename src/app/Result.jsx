import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Index = props => {
  const { dispatch, questionAnswerPairs } = props;

  const resetPreviousHistory = (targetID) => {
    dispatch(actions.resetPreviousHistory());
    dispatch(actions.setActiveSheetID(targetID));
  }

  return (
    <div className="layout--flex layout--fullheight">
      <div className="row typ--center">
        <h1 className="typ--bold mb2">Result</h1>
        <ul className="list--inline mb5">
          { questionAnswerPairs.map((item, i) => {
            return (
              <li className="mx2" key={ i }>
                { item.answer }
              </li>
            )
          }) }
        </ul>

        <button className="btn" onClick={ () => resetPreviousHistory('index') }>Start Over</button>
      </div>
    </div>
  )
}

Index.propTypes = {
  dispatch: React.PropTypes.func,
  activeSheetID: React.PropTypes.object,
  questionAnswerPairs: React.PropTypes.array
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID,
  questionAnswerPairs: state.questionAnswerPairs
});

export default connect(injectStateProps)(Index);
