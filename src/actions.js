export const setActiveSheetID = (sheetID) => ({
  type: 'SET_ACTIVE_SHEET_ID', sheetID
});

export const addPreviousSheetID = (sheetID) => ({
  type: 'ADD_PREVIOUS_SHEET_ID', sheetID
});

export const resetPreviousHistory = () => ({
  type: 'RESET_PREVIOUS_HISTORY'
});

export const revertToPreviousSheetID = () => ({
  type: 'REVERT_TO_PREVIOUS_SHEET_ID'
});

export const setAnswerToQuestion = (sheetID, answer) => ({
  type: 'SET_ANSWER_TO_QUESTION', sheetID, answer
});

export const setDrinkTo = (drink) => ({
  type: 'SET_DRINK_TO', drink
});
