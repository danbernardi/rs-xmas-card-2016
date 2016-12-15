import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { responseDelay: 750, hideQuestion: false };
  }

  switchActiveSheet(targetID) {
    const { activeSheetID, dispatch } = this.props;

    dispatch(actions.addPreviousSheetID(activeSheetID.current));
    dispatch(actions.setActiveSheetID(targetID));
  }

  selectAnswer(answer, targetID, responseNumber) {
    const { dispatch, activeSheetID } = this.props;

    const response = answer.responses[responseNumber];

    if (response) {
      this.setResponseTo(response, () => {
        this.selectAnswer(answer, targetID, responseNumber + 1);
      });
    } else {
      setTimeout(() => {
        this.switchActiveSheet(targetID);
        dispatch(actions.setAnswerToQuestion(activeSheetID.current, answer));
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
    const { question, answers, color, nextPage } = this.props;
    const { showResponse, hideQuestion } = this.state;

    return (
      <div className="question__page" style={ { backgroundColor: color } }>
        <div className="row">
          <div className={ `question-section ${ hideQuestion ? 'hidden' : '' }` }>
            <h1 className="question__label">{ question }</h1>
            <ul className="list--inline question__answers mt2 mb6">
              { answers.map((a, i) => (
                <li style={ { color } } className="mx1" key={i  } onClick={ () => this.selectAnswer(a, nextPage, 0) }>
                  { a.name }
                </li>
              )) }
            </ul>
          </div>
          <div className={ `response-section ${showResponse ? '' : 'hidden'}`}>
            <ul>
              <li className='mx1'>{ this.state.response }</li>
            </ul>
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
