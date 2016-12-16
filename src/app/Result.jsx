import React from 'react';
import { connect } from 'react-redux';
import { drinks, beer } from './data/drinks';
import { questions } from './data/questions';
import Footer from './Footer';

const Index = props => {
  const { questionAnswerPairs } = props;

  const distance = (a1, a2) => Math.abs(
    (a1[0] - a2[0]) +
    (a1[1] - a2[1]) +
    (a1[2] - a2[2])
  );

  const randomElem = array => array[Math.floor(Math.random() * array.length)];

  const scores = questionAnswerPairs.map(obj => obj.answer.scores);
  const strength = scores.map(score => score[0]).reduce((total, elem) => total + elem, 0) / (scores.length);
  const weirdness = scores.map(score => score[1]).reduce((total, elem) => total + elem, 0) / (scores.length);
  const fruitiness = scores.map(score => score[2]).reduce((total, elem) => total + elem, 0) / (scores.length);

  const idealDrink = { scores: [strength, weirdness, fruitiness] };

  const sortedDrinks = drinks.map(d => Object.assign(d, {
    distance: parseInt(distance(d.scores, idealDrink.scores))
  })).sort((drinkA, drinkB) => drinkA.distance - drinkB.distance);

  const beerFriendlyAnswers = questionAnswerPairs.map(obj => obj.answer.beer).filter(bool => bool);

  let drink = randomElem(sortedDrinks.filter(d => d.distance === sortedDrinks[0].distance));

  if (beerFriendlyAnswers.length === questions.length) {
    drink = beer;
  }

  if (questionAnswerPairs.length === questions.length) {
    debugger
  }

  return (
    <div className="result">
      { drink ?
        <div>
          <div className="theme--dark py10" style={ { backgroundColor: drink.color, height: 'calc(100vh - 11.5rem)' } }>
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
          </div>

          <article className="recipe row" style={ { color: drink.color } }>
            <span className="recipe__trigger typ--caps">See recipe <span className='fa-caret-down'></span></span>

            <h3>{ drink.description }</h3>

            <div className="recipe__keyline">
              <div className="recipe__keyline__img">
                <img src={ drink.illustration } alt={ drink.name } />
              </div>
            </div>

            <div className="col-5">
              <h3 className="mb2">Ingredients:</h3>
              <ul className="mb2">
                { drink.ingredients.map((ing, index) => (
                  <li key={ index }>
                    { ing }
                  </li>
                )) }
              </ul>

              { drink.garnish ?
                <div className="cf">
                  <p className="mb0">Garnish:</p>
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

            <div className="col-7 col-last">
              <h3 className="mb2">Instructions:</h3>
              <ol>
                { drink.instructions.map((ins, index) => (
                  <li key={ index }>
                    { ins }
                  </li>
                )) }
              </ol>
            </div>

            <Footer showAddress={ true } color={ drink.color } dontHide={ true } row={ false } />
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
