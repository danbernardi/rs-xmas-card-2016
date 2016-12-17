import React from 'react';

import { connect } from 'react-redux';
import { drinks, beer } from './data/drinks';
import { questions } from './data/questions';
import { setDrinkTo, addPreviousSheetID, setActiveSheetID } from '../actions';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(props) {
    const { dispatch, activeSheetID, questionAnswerPairs } = props;
    if (questions.length === questionAnswerPairs.length && !this.state.fired) {
      this.setState({ fired: true });
      setTimeout(() => {
        dispatch(setDrinkTo(this.calculateDrink()));
        dispatch(addPreviousSheetID(activeSheetID.current));
        dispatch(setActiveSheetID('result'));
      }, 2000);
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
      <div style={{ height: '100%' }} >
        <img src={ require('../assets/img/loader.gif') } style={{ width: '50%' }} />
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
