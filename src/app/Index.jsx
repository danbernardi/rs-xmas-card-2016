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
    <div className="layout--flex layout--fullheight hero index theme--dark">
      <div className="row typ--center">
        <div className="col-8 col-center" style={ { marginTop: '-20rem' } }>
          <h1 className="typ--bold mb6">However you like to celebrate the holidays, we have a cocktail for you!</h1>
          <button className="btn" onClick={ () => switchActiveSheet('question-1') }>Start</button>
        </div>
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
