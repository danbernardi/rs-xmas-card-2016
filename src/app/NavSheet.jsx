import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

const NavSheet = props => {
  const { id, component, activeSheetID, dispatch } = props;

  const switchActiveSheet = (targetID) => {
    dispatch(actions.addPreviousSheetID(activeSheetID.current));
    dispatch(actions.setActiveSheetID(targetID));
  }

  const revertActiveSheet = () => {
    dispatch(actions.revertToPreviousSheetID());
  }
  
  const initialStyles = { transition: 'transform 0.5s ease-in-out' };
  let transformStyles = {};

  if (activeSheetID.current === id) {
    // if sheet is currently active
    transformStyles = { transform: 'translateX(0)' };
  } else if (activeSheetID.previous.indexOf(id) !== -1) {
    // if sheet has been active in the past
    transformStyles = { transform: 'translateX(-100%)' };
  } else {
    // if sheet isn't and hasn't yet been active
    transformStyles = { transform: 'translateX(100%)' };
  }

  return (
    <div className="nav__sheet" style={ Object.assign(initialStyles, transformStyles) }>
      { activeSheetID.previous.length > 0 ? <h4 className="navsheet__back typ--medium" onClick={ () => revertActiveSheet() }>Back</h4> : null }
      { component && React.cloneElement(component, { onAdvance: (targetID) => switchActiveSheet(targetID) }) }
    </div>
  );
};

NavSheet.propTypes = {
  id: React.PropTypes.string,
  component: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  activeSheetID: React.PropTypes.object
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID
});

export default connect(injectStateProps)(NavSheet);
