import React from 'react';

import { connect } from 'react-redux';
import { drinks, beer } from './data/drinks';
import { questions } from './data/questions';
import { setDrinkTo, setActiveSheetID } from '../actions';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(props) {
    const { dispatch, questionAnswerPairs, drink, activeSheetID } = props;
    if (questions.length === questionAnswerPairs.length
            && !drink && activeSheetID.current === 'loader') {
      dispatch(setDrinkTo(this.calculateDrink()));
      setTimeout(() => {
        this.setState({ fired: true });
        setTimeout(() => {
          dispatch(setActiveSheetID('result'));
        }, 1000)
      }, 6000);
    }
  }

  calculateDrink() {
    const { questionAnswerPairs } = this.props;

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

    return drink;
  }

  render() {
    return (
      <div className={ `loader ${ this.state.fired ? 'hidden' : ''}`} >
        <img src={ require('../assets/img/loader.gif') } />
        <h4>[Mixing your cocktail...]</h4>
      </div>
    );
  }
}

const injectProps = (state) => ({
  questionAnswerPairs: state.questionAnswerPairs,
  activeSheetID: state.activeSheetID,
  drink: state.drink
});

Loader.propTypes = {
  questionAnswerPairs: React.PropTypes.array,
  activeSheetID: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  drink: React.PropTypes.object
};

export default connect(injectProps)(Loader);
