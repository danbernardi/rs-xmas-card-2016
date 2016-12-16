import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import RangeSlider from './components/RangeSlider';
import Dropdown from './components/Dropdown';
import RadioGroup from './components/RadioGroup';
import ImageSelector from './components/ImageSelector';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { responseDelay: 750, hideQuestion: false };
  }

  switchActiveSheet(targetID, responseIndex) {
    const { activeSheetID, dispatch } = this.props;
    const { selectedAnswer } = this.state;

    if (!selectedAnswer) {
      return null;
    }

    const response = selectedAnswer.responses[responseIndex];

    if (response) {
      this.setResponseTo(response, () => {
        this.switchActiveSheet(targetID, responseIndex + 1);
      });
    } else {
      setTimeout(() => {
        dispatch(actions.addPreviousSheetID(activeSheetID.current));
        dispatch(actions.setActiveSheetID(targetID));
      }, this.state.responseDelay)
    }
  }

  setResponseTo(response, onResponseComplete = () => {}) {
    // If replacing an old response with a new one, fade it out first
    if (this.state.response && this.state.showResponse) {
      this.setState({ showResponse: false });
      setTimeout(() => {
        this.setResponseTo(response, onResponseComplete);
      }, this.state.responseDelay);

    // If no old response (or it's faded out), replace with new one
    } else {
      this.setState({ showResponse: true, hideQuestion: true, response: response });
      setTimeout(() => {
        onResponseComplete();
      }, this.state.responseDelay * 2);
    }
  }

  render() {
    const { question, answers, color, nextPage, id, activeSheetID, dispatch } = this.props;
    const { showResponse, hideQuestion, selectedAnswer } = this.state;

    const onAnswerSelect = (answer) => {
      this.setState({ selectedAnswer: answer });
      dispatch(actions.setAnswerToQuestion(activeSheetID.current, answer))
    };

    const component = {
      naughty: <RangeSlider answers={ answers } onAnswerSelect={ (answer) => { onAnswerSelect(answer) } } />,
      party: <Dropdown answers={ answers } onAnswerSelect={ (answer) => { onAnswerSelect(answer) } } />,
      snow: <RadioGroup answers={ answers } onAnswerSelect={ (answer) => { onAnswerSelect(answer) } }/>,
      meal: <ImageSelector answers={ answers } onAnswerSelect={ (answer) => { onAnswerSelect(answer) } } />
    }[id];

    return (
      <div className="question__page">
        <div className="row">
          <div className={ `question-section ${ hideQuestion ? 'hidden' : '' }` }>
            <h1 className="question__label">{ question }</h1>
            { component }
          </div>
          <div className={ `response-section ${showResponse ? '' : 'hidden'}` }>
            <h1 className="question__label">{ this.state.response }</h1>
          </div>
        </div>

        <div className="typ--center mt10">
          <div className={ `next-section typ--center mt10 ${ hideQuestion ? 'hidden' : '' }` }>
            <button className="btn btn--ghost" onClick={ () => {
              this.switchActiveSheet(nextPage, 0) }
            }>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  question: React.PropTypes.string,
  answers: React.PropTypes.array,
  color: React.PropTypes.string,
  nextPage: React.PropTypes.string,
  dispatch: React.PropTypes.func,
  activeSheetID: React.PropTypes.object
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID
});

export default connect(injectStateProps)(Question);
