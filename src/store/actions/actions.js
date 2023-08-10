import vacanciesSlice from '../slices/vacanciesSlice';
import mainSlice from '../slices/mainSlice';

export const { showDetailsHandler } = vacanciesSlice.actions;

export const { changeLanguageHandler, onChangeInputFeedback, clearFeedbackText } =
  mainSlice.actions;

export const onClickFeedback = feedbackText => {
  return dispatch => {
    console.log(feedbackText);
    //dispatch(clearFeedbackText());
  };
};
