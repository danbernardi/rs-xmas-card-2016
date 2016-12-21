import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import snowfall from '../utils/snowfall';

class Index extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      snowfall.snow(this.div, {
        flakeCount: 75,
        minSize: 2,
        maxSize: 5,
        round: true,
        maxSpeed: 2,
        minSpeed: 0.5,
        flakeColor: 'rgba(255, 255, 255, 0.75)'
      });
    }, 100);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.activeSheetID.current === 'naughty') {
      const els = document.getElementsByClassName('snowfall-flakes');
      const parent = document.getElementsByClassName('hero')[0];
      [].forEach.call(els, el => {
        parent.removeChild(el);
      });
    }
  }

  render() {
    const { dispatch, activeSheetID } = this.props;

    const switchActiveSheet = (targetID) => {
      dispatch(actions.addPreviousSheetID(activeSheetID.current));
      dispatch(actions.setActiveSheetID(targetID));
    }

    return (
      <div
        className="layout--flex layout--fullheight hero index theme--dark"
        ref={ (el) => this.div = el }
      >
        <div className="row typ--center">
          <div className="col-12 col-12--tlg col-center">
            <img src="http://www.redshiftdigital.com/holiday2016/assets/img/empty_glasses.svg" />
            <h1 className="typ--bold my10 my3--mlg">We've created a cocktail recipe generator to help you find your perfect drink this holiday season.</h1>
            <button className="btn mb10 mb5--mlg" onClick={ () => switchActiveSheet('naughty') }>Start</button>
          </div>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  dispatch: React.PropTypes.func,
  activeSheetID: React.PropTypes.object
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID
});

export default connect(injectStateProps)(Index);
