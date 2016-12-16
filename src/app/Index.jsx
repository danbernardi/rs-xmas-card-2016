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
          <h1 className="typ--bold mb4">It’s been quite a year, so we thought you might enjoy a cocktail, or two.</h1>
          <h1 className="typ--bold mb10">We’ve created a cocktail recipe generator to help you find your perfect drink this holiday season.</h1>

          <button className="btn" onClick={ () => switchActiveSheet('naughty') }>Start</button>
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
