import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeInputFeedback, onClickFeedback } from '../../store/actions/actions';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const dispatch = useDispatch();
  //const feedbackText = useSelector(state => state.main.feedbackText);

  const [feedback, setFeedback] = useState(' ');
  console.log(feedback);
  return (
    <div className="feedback">
      <p> Связаться с нами </p>
      <br />
      <p> Мы ответим на любые вопросы</p>
      <div>
        <textarea
          onChange={event => {
            dispatch(onChangeInputFeedback(event.target.value));
            setFeedback(event.target.value);
          }}
          defaultValue={feedback}
          className="textarea"
        />
        <button
          className="btn"
          onClick={() => {
            dispatch(onClickFeedback(feedback));
            console.log('lalal');
            setFeedback(' ');
            dispatch(onChangeInputFeedback(''));
            console.log('l;alala 2 ');
          }}
        >
          Связаться с нами
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
