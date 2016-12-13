import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { drinks } from './data/drinks';

const Index = props => {
  const { dispatch, questionAnswerPairs } = props;

  const resetPreviousHistory = (targetID) => {
    dispatch(actions.resetPreviousHistory());
    dispatch(actions.setActiveSheetID(targetID));
  }

  const drink = drinks && drinks.length ? drinks[5] : null;
  // debugger;

  return (
    <div className="result">
      { drink ?
        <div>
          <div className="layout--fullheight theme--dark py10" style={ { backgroundColor: drink.color } }>
            <div className="row">
              <div className="col-8 col-center">
                <h3 className="mb10 typ--center">{ drink.heading }</h3>
                
                <div className="col-6">
                  <img src={ drink.img } alt={ drink.name } />
                </div>

                <div className="col-6 col-last pl5">
                  <h1 className="result__name">{ drink.name }</h1>
                </div>
              </div>
            </div>
            <span className="recipe__trigger typ--caps">See recipe <span className='fa-caret-down'></span></span>
          </div>

          <article className="recipe row" style={ { color: drink.color } }>
            <h3 className="mb10">{ drink.description }</h3>

            <div className="col-6">
              <h5 className="mb2">Ingredients:</h5>
              <ul className="mb2">
                { drink.ingredients.map((ing, index) => (
                  <li key={ index }>
                    { ing }
                  </li>
                )) }
              </ul>

              { drink.garnish ?
                <div className="cf">
                  <h6>Garnish:</h6>
                  <ul>
                    { drink.garnish.map((gar, index) => (
                      <li key={ index }>
                        { gar }
                      </li>
                    )) }
                  </ul>
                </div>
              : null }
            </div>

            <div className="col-6 col-last">
              <h5 className="mb2">Instructions:</h5>
              <ol>
                { drink.instructions.map((ins, index) => (
                  <li key={ index }>
                    { ins }
                  </li>
                )) }
              </ol>
            </div>
          </article>
        </div>
      : <p>There was an error. No drinks were returned.</p> }
    </div>
  )
}

Index.propTypes = {
  dispatch: React.PropTypes.func,
  activeSheetID: React.PropTypes.object,
  questionAnswerPairs: React.PropTypes.array
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID,
  questionAnswerPairs: state.questionAnswerPairs
});

export default connect(injectStateProps)(Index);
