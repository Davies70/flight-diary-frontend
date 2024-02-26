import { DiariesProp } from '../types';
import DiaryData from './DiaryData';
const Diaries = (props: DiariesProp) => {
  return (
    <>
      <h3>Diary Entries</h3>
      {props.dairies.map((d) => {
        return <DiaryData {...d} key={d.id} />;
      })}
    </>
  );
};

export default Diaries;
