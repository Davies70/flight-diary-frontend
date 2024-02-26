import Header from './components/Header';
import Form from './components/Form';
import Diaries from './components/Diaries';
import { getDiaries, addDiary } from './services/diaryService';
import { useEffect, useState } from 'react';
import { Diary, NewDiary } from './types';
import Error from './components/Error';
import axios from 'axios';

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [errorMessage, seterrorMessage] = useState('');

  useEffect(() => {
    getDiaries().then((data) => setDiaries(data));
  }, []);

  const createDiary = async (object: NewDiary) => {
    try {
      const data = await addDiary(object);
      setDiaries(diaries.concat(data));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        seterrorMessage(error.response?.data);
      } else {
        console.error(error);
      }
      setTimeout(() => {
        seterrorMessage('');
      }, 5000);
    }
  };

  return (
    <>
      <Header />
      <Error message={errorMessage} />
      <Form createDiary={createDiary} />
      <Diaries dairies={diaries} />
    </>
  );
}

export default App;
