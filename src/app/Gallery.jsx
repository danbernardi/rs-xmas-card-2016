import React from 'react';
import { connect } from 'react-redux';
import { setDrinkTo, setActiveSheetID } from '../actions';

import { drinks } from './data/drinks';

const Gallery = props => {
  const { dispatch } = props;
  const drinkItems = drinks.map((drink) => {
    return (
      <li
        className="list--inline"
        style={{backgroundColor: drink.color}}
        onClick={ (event) => {
          dispatch(setDrinkTo(drink));
          dispatch(setActiveSheetID('result'));
        }}
      >
        <div className="drink-wrapper">

            <img src={ `http://redshiftdigital.com/holiday2016/assets/img/drinks/${drink.img}` } alt={ drink.name }/>
            {/*<span className="grid-title">{ drink.name }</span>*/}
        </div>
      </li>
    );
  });



  return (
    <div className="gallery">
      <h1 className="mb6 mb3--mlg title">12 Holiday Cocktails from Redshift</h1>
      <ul className="drink-list cf">
        { drinkItems }
      </ul>

      <div className="gallery-footer">
        <h2>Thanks for a great year. See you in 2017!</h2>

        <button
          className={ 'btn btn--ghost' }
          onClick={ () => {
            // this.respondOrSwitchPages(nextPage)
          }
        }>
          Take the quiz again
        </button>
      </div>
    </div>
  )
}

Gallery.propTypes = {
  dispatch: React.PropTypes.func,
  drink: React.PropTypes.object,
};

const injectStateProps = state => ({
  drink: state.drink,
});

export default connect(injectStateProps)(Gallery);
