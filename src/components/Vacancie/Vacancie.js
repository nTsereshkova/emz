import { useDispatch } from 'react-redux';
import { showDetailsHandler } from '../../store/actions/actions';
import './Vacancie.css';

const Vacancie = ({ item }) => {
  const dispatch = useDispatch();
  const { showDetails, job, cvalification, condition, details, id } = item;
  return (
    <div className="vacancie">
      <div className="vacancie-about">
        <p> {`${job} ${cvalification} ${condition}`}</p>
        {showDetails && <p> {details}</p>}
      </div>
      <button
        className="vacancie-btn"
        onClick={() => dispatch(showDetailsHandler(id))}
      >
        {!showDetails ? '+' : '-'}
      </button>
    </div>
  );
};

export default Vacancie;
