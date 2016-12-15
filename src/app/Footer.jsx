import React from 'react';
import { connect } from 'react-redux';

const Footer = props => {
  const { activeSheetID, showAddress, color, dontHide } = props;

  const socialMedia = [
    {
      icon: 'fa-facebook',
      url: 'https://www.facebook.com/REDSHIFT-214656608561411/'
    },
    {
      icon: 'fa-twitter',
      url: 'https://twitter.com/weareredshift'
    },
    {
      icon: 'fa-instagram',
      url: 'https://www.instagram.com/weareredshift/'
    }
  ];

  const initialStyles = { transition: 'opacity 0.2s ease-in-out', color };
  let transformStyles = {};

  if (activeSheetID.current === 'index' || dontHide) {
    transformStyles = { opacity: '1', 'pointer-events': 'auto' };
  } else {
    transformStyles = { opacity: '0', 'pointer-events': 'none' };
  }

  return (
    <div className="footer cf row" style={ Object.assign(initialStyles, transformStyles) }>
      <div className="layout--relative">
        <ul className="footer__social list--inline layout--left">
          { socialMedia.map((item, index) => (
            <li key={ index }>
              <a href={ item.url } target="_blank" style={ { color } }><h4><span className={ item.icon }></span></h4></a>
            </li>
          )) }
        </ul>

        { showAddress ?
          <ul className="layout--right typ--right">
            <li>8 California St. San Francisco, CA 94111</li>
            <li><a style={ { color } } href="mailto:hello@redshiftdigital.com">hello@redshiftdigital.com</a></li>
            <li><a style={ { color } } href="tel:14154333776">415 433 3776</a></li>
          </ul>
        : null }
      </div>
    </div>
  );
};

Footer.propTypes = {
  showAddress: React.PropTypes.bool,
  color: React.PropTypes.string,
  activeSheetID: React.PropTypes.object,
  dontHide: React.PropTypes.bool
};

Footer.defaultProps = {
  showAddress: false,
  color: '#FBF7EF',
  dontHide: false
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID
});

export default connect(injectStateProps)(Footer);
