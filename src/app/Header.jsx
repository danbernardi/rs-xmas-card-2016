import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  const { activeSheetID } = props;

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
        <img src={ require('../assets/img/redshift_logo.svg') } alt="Redshift Digital" />
      </a>
    </div>
  );
};

Header.propTypes = {
  activeSheetID: React.PropTypes.object
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID
});

export default connect(injectStateProps)(Header);
