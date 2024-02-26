import axios from 'axios';
import { Diary, NewDiary } from '../types';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getDiaries = async () => {
  const response = await axios.get(baseUrl);
  return response.data as Diary[];
};

export const addDiary = async (object: NewDiary) => {
  const response = await axios.post(baseUrl, object);
  return response.data;
};
