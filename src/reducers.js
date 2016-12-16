import { combineReducers } from 'redux';
import _ from 'lodash';

const initialState = {
  activeSheetID: { current: 'index', previous: [] },
  questionAnswerPairs: [{ // Set a default for the slider, so you don't have to click to move on
    "questionID": "naughty",
    "answer": {
      "name": "Middle",
      "responses": [
        "Hmm. Bartender's choice..."
      ],
      "scores": [
        2,
        8,
        2
      ]
    }
  }]
};

const activeSheetID = (state = initialState.activeSheetID, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_SHEET_ID': {
      return Object.assign({}, state, { current: action.sheetID });
    }

    case 'ADD_PREVIOUS_SHEET_ID': {
      const previousArray = state.previous;
      previousArray.push(action.sheetID);
      return Object.assign({}, state, { previous: previousArray });
    }

    case 'RESET_PREVIOUS_HISTORY': {
      return Object.assign({}, state, { previous: [] });
    }

    case 'REVERT_TO_PREVIOUS_SHEET_ID': {
      const previousArray = state.previous;
      return Object.assign({}, state, { current: previousArray.pop(), previous: previousArray })
    }

    default: {
      return state;
    }
  }
};

const questionAnswerPairs = (state = initialState.questionAnswerPairs, action) => {
  switch(action.type) {
    case 'SET_ANSWER_TO_QUESTION': {
      const newState = state.slice();

      if (newState.filter(a => a.questionID === action.sheetID).length) {
        const existingQuestionIndex = _.findIndex(newState, (a) => a.questionID === action.sheetID);
        newState[existingQuestionIndex] = { questionID: action.sheetID, answer: action.answer };
      } else {
        newState.push({ questionID: action.sheetID, answer: action.answer });
      }

      return newState;
    }

    default: {
      return state;
    }
  }
}

const reducers = combineReducers({
  activeSheetID,
  questionAnswerPairs
});

export default reducers;
