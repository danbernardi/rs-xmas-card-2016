import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Index = props => {
  const { dispatch, activeSheetID } = props;

  const switchActiveSheet = (targetID) => {
    dispatch(actions.addPreviousSheetID(activeSheetID.current));
    dispatch(actions.setActiveSheetID(targetID));
  }

  return (
    <div className="layout--flex layout--fullheight">
      <div className="row typ--center">
        <h1 className="typ--bold mb6">Welcome to the holiday card POC</h1>
        <button className="btn" onClick={ () => switchActiveSheet('question-1') }>Get started</button>
      </div>
    </div>
  )
}

Index.propTypes = {
  dispatch: React.PropTypes.func,
  activeSheetID: React.PropTypes.object
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID
});

export default connect(injectStateProps)(Index);
