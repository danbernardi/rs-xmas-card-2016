import React from 'react';
import { connect } from 'react-redux';
import { setMusicTo } from '../actions';

const Header = props => {
  const { activeSheetID, music, musicOn, dispatch, logoStyle } = props;
  const logoFileName = logoStyle && logoStyle === 'dark' ? 'redshift_logo_dark.svg' : 'redshift_logo.svg';


  const initialStyles = { transition: 'opacity 0.5s ease-in-out' };
  let transformStyles = {};

  if (activeSheetID.current === 'index') {
    transformStyles = { opacity: '1' };
  } else {
    transformStyles = { opacity: '0.3' };
  }

  return (
    <div
      className="header row"
      style={ Object.assign(initialStyles, transformStyles) }
    >
      <a href="http://redshiftdigital.com/" target="_blank">
        <img src={ require(`../assets/img/${logoFileName}`) } alt="Redshift Digital" />
      </a>
      <span
        className={ `audio-control ${music ? '' : 'hidden'}` }
        onClick={ () => { dispatch(setMusicTo(!musicOn)) } }
      >{ musicOn ? 'PAUSE' : 'PLAY' }
      </span>
    </div>
  );
};

Header.propTypes = {
  activeSheetID: React.PropTypes.object,
  music: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  musicOn: React.PropTypes.bool
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID,
  music: state.drink && state.drink.music,
  musicOn: state.musicOn
});

export default connect(injectStateProps)(Header);
