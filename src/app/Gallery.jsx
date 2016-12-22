import React from 'react';
import { connect } from 'react-redux';
import { setDrinkTo, setActiveSheetID } from '../actions';
import { scrollTo } from './Result';
import { drinks } from './data/drinks';

class Gallery extends React.Component {

  render() {
    const { dispatch } = this.props;
    const container = document.getElementsByClassName('result')[0];
    const drinkItems = drinks.map((drink) => {
      return (
        <li
          className="list--inline drinks-list"
          style={{backgroundColor: drink.color}}
          onClick={ () => {
            dispatch(setDrinkTo(drink));
            setTimeout(() => {
              scrollTo(container, 0, 500);
            }, 200);
          }}
        >
          <div className="drink-wrapper">
            <img src={ `http://redshiftdigital.com/holiday2016/assets/img/drinks/${drink.img}` } alt={ drink.name }/>
            <div className="drink-name" style={{ color: 'white', fontWeight: 'bold' }}>
              { drink.name }
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className="gallery">
        { /* <h1 className="mb6 my3--mlg title">12 Holiday Cocktails from Redshift</h1> */ }
        <ul className="drink-list cf">
          { drinkItems }
        </ul>

        <div className="gallery-footer">
          <h2 className="mb3--tlg">Thanks for a great year. See you in 2017!</h2>

          <button
            className={ 'btn btn--ghost mt3' }
            onClick={ () => {
              window.location = 'http://redshiftdigital.com/holiday2016/';
            }
          }>
            Take the quiz again
          </button>
        </div>
      </div>
    )
  }
}

Gallery.propTypes = {
  dispatch: React.PropTypes.func,
  drink: React.PropTypes.object,
};

const injectStateProps = state => ({
  drink: state.drink,
});

export default connect(injectStateProps)(Gallery);
