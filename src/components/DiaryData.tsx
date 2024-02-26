import { Diary } from '../types';
import '../index.css';

const DiaryData = (props: Diary) => {
  return (
    <div className='diaryData'>
      <h4>{props.date}</h4>
      <p>visibility: {props.visibility}</p>
      <p>weather: {props.weather}</p>
    </div>
  );
};

export default DiaryData;
