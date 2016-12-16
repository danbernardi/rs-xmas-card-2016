import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { drinks, beer } from './data/drinks';
import { questions } from './data/questions';

const Index = props => {
  const { dispatch, questionAnswerPairs } = props;

  const distance = (a1, a2) => Math.abs(
    (a1[0] - a2[0]) +
    (a1[1] - a2[1]) +
    (a1[2] - a2[2])
  );

  const randomElem = array => array[Math.floor(Math.random() * array.length)];

  const resetPreviousHistory = (targetID) => {
    dispatch(actions.resetPreviousHistory());
    dispatch(actions.setActiveSheetID(targetID));
  }

  const scores = questionAnswerPairs.map(obj => obj.answer.scores);
  const strength = scores.map(score => score[0]).reduce((total, elem) => total + elem, 0) / (scores.length);
  const weirdness = scores.map(score => score[1]).reduce((total, elem) => total + elem, 0) / (scores.length);
  const fruitiness = scores.map(score => score[2]).reduce((total, elem) => total + elem, 0) / (scores.length);

  const idealDrink = { scores: [strength, weirdness, fruitiness] };

  const sortedDrinks = drinks.map(drink => Object.assign(drink, {
    distance: parseInt(distance(drink.scores, idealDrink.scores))
  })).sort((drinkA, drinkB) => drinkA.distance - drinkB.distance);

  const beerFriendlyAnswers = questionAnswerPairs.map(obj => obj.answer.beer).filter(bool => bool);
  let drink;

  if (beerFriendlyAnswers.length === questions.length) {
    drink = beer;
  } else {
    // Randomly select one of the closest drinks
    drink = randomElem(sortedDrinks.filter(drink => drink.distance === sortedDrinks[0].distance));
  }

  if (questionAnswerPairs.length === questions.length) {
    debugger
  }

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
