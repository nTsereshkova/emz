import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeInputFeedback, onClickFeedback } from '../../store/actions/actions';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const dispatch = useDispatch();

  const [feedback, setFeedback] = useState(' ');
  const [feedbackIsSend, setFeedbackIsSend] = useState(false);
  console.log(feedback);
  return (
    <div className="feedback">
      <p> Связаться с нами </p>
      <br />
      <p> Мы ответим на любые вопросы</p>
      <div>
        <textarea
          onChange={event => {
            //dispatch(onChangeInputFeedback(event.target.value));
            setFeedback(event.target.value);
            setFeedbackIsSend(false);
          }}
          //defaultValue={''}
          value={feedback}
          className="textarea"
        />
        <button
          className="btn"
          onClick={() => {
            dispatch(onClickFeedback(feedback));
            setFeedback(' ');
            setFeedbackIsSend(true);
          }}
        >
          Связаться с нами
        </button>
        {feedbackIsSend && <p> Ваш запрос был успешно отправлен </p>}
      </div>
    </div>
  );
};

export default FeedbackForm;
