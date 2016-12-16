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

    this.state = {
      responseDelay: 1000,
      hideQuestion: false,
      selectedAnswer: props.selectedAnswer
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ selectedAnswer: newProps.selectedAnswer });
  }

  respondOrSwitchPages(targetID) {
    const { activeSheetID, dispatch } = this.props;
    const { selectedAnswer } = this.state;

    if (!selectedAnswer) {
      return null;
    }

    const { responses } = selectedAnswer;

    if (responses) {
      this.setResponses(() => {
        this.switchPage(targetID);
      });
    } else {
      this.switchPage(targetID);
    }
  }

  switchPage(targetID) {
    const { activeSheetID, dispatch } = this.props;
    dispatch(actions.addPreviousSheetID(activeSheetID.current));
    dispatch(actions.setActiveSheetID(targetID));
  }

  setResponses(switchPage) {
    const { showResponse, responseDelay, selectedAnswer } = this.state;
    const responses = selectedAnswer.responses;
    const callbacks = [];

    // Fill array of sequential actions to fade out question, show responses, then move
    callbacks.push(() => {
      this.setState({ hideQuestion: true }); // Fade out old
    });
    responses.forEach((response, index) => {
      callbacks.push(() => {
        this.setState({ showResponse: false }); // Fade out old
      });
      callbacks.push(() =>  {
        this.setState({ showResponse: true, response }); // Show new
      });
    });

    callbacks.push(switchPage);

    // Sequentially call functions, with delay between each call
    this.runResponseFunctions(callbacks);
  }

  runResponseFunctions(responseFuncs, index = 0) {
    const { responseDelay } = this.state;
    const func = responseFuncs[index];

    if (func) {
      func();
      setTimeout(() => {
        this.runResponseFunctions(responseFuncs, index + 1);
      }, responseDelay);
    }
  }

  render() {
    const { question, answers, color, nextPage, id, activeSheetID, dispatch } = this.props;
    const { showResponse, hideQuestion, selectedAnswer } = this.state;

    const onAnswerSelect = (answer) => {
      this.setState({ selectedAnswer: answer });
      dispatch(actions.setAnswerToQuestion(activeSheetID.current, answer))
    };

    const QuestionComponent = {
      naughty: RangeSlider,
      party: Dropdown,
      snow: RadioGroup,
      meal: ImageSelector
    }[id];


    return (
      <div className="question__page typ--center">
        <div className="question__wrap row">
          <div className={ `question-section ${ hideQuestion ? 'hidden' : '' }` }>
            <h1 className="question__label mb6">{ question }</h1>
            <QuestionComponent
              answers={ answers }
              onAnswerSelect={ answer => { onAnswerSelect(answer) } }
              selectedAnswer={ selectedAnswer }
            />
          </div>

          <div className={ `response-section ${showResponse ? '' : 'hidden'}` }>
            <h1 className="question__label">{ this.state.response }</h1>
          </div>

          <div className={ `next-section typ--center mt10 ${ hideQuestion ? 'hidden' : '' }` }>
            <button
              className={ `btn btn--ghost ${ selectedAnswer ? '' : 'disabled' }` }
              onClick={ () => {
                this.respondOrSwitchPages(nextPage)
              }
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
  activeSheetID: React.PropTypes.object,
  selectedAnswer: React.PropTypes.object
};

const injectStateProps = state => {
  const sheet = state.activeSheetID;
  const pair = state.questionAnswerPairs.find(pair => pair.questionID === sheet.current)
  return {
    activeSheetID: sheet,
    selectedAnswer: pair && pair.answer
  };
};

export default connect(injectStateProps)(Question);
