import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  const { activeSheetID, logoStyle } = props;
  const logoDarkPages = ['naughty', 'party', 'snow', 'meal', 'loader', 'gallery'];
  const darkLogo = logoDarkPages.indexOf(activeSheetID.current) !== -1;



  console.log(activeSheetID.current, darkLogo);



  const logoFileName = darkLogo ? 'redshift_logo_dark.svg' : 'redshift_logo.svg';

  const initialStyles = { transition: 'opacity 0.5s ease-in-out' };
  let transformStyles = {};

  if (activeSheetID.current === 'index' || darkLogo) {
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
        <img src={ `http://redshiftdigital.com/holiday2016/assets/img/${logoFileName}` } alt="Redshift Digital" />
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
