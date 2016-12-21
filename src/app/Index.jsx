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
            <h1 className="typ--bold my10 my3--mlg mt10--mlg">The Redshift Holiday Cocktail Generator</h1>
            <img src="http://www.redshiftdigital.com/holiday2016/assets/img/empty_glasses.svg" />
            <h2 className="typ--bold my10 my3--mlg">Answer a few questions and we’ll find your perfect holiday tipple.</h2>
            <button className="btn my10 mb10--mlg mt3--mlg" onClick={ () => switchActiveSheet('naughty') }>Let's Get Shaking</button>
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
