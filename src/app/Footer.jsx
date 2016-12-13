import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Footer = props => {
  const { activeSheetID } = props;

  const socialMedia = [
    {
      icon: 'fa-facebook',
      url: '#'
    },
    {
      icon: 'fa-twitter',
      url: '#'
    },
    {
      icon: 'fa-instagram',
      url: '#'
    }
  ];

  const initialStyles = { transition: 'opacity 0.2s ease-in-out' };
  let transformStyles = {};

  if (activeSheetID.current === 'index' || activeSheetID.current === 'result') {
    transformStyles = { opacity: '1', pointerEvents: 'auto' };
  } else {
    transformStyles = { opacity: '0', pointEvents: 'none' };
  }

  return (
    <ul
      className="footer row list--inline theme--dark"
      style={ Object.assign(initialStyles, transformStyles) }
    >
      { socialMedia.map((item, index) => (
        <li key={ index }>
          <Link to={ item.url }><h4><span className={ item.icon }></span></h4></Link>
        </li>
      )) }
    </ul>
  );
};

Footer.propTypes = {
  activeSheetID: React.PropTypes.object
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID
});

export default connect(injectStateProps)(Footer);
