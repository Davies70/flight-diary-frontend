export interface Diary {
  id: number;
  date: string;
  weather: string;
  visibility: string;
  comment: string;
}

export interface DiariesProp {
  dairies: Diary[];
}

export type NewDiary = Omit<Diary, 'id'>;

export interface ErrorProp {
  message: string;
}

export interface FormProp {
  createDiary: (object: NewDiary) => Promise<void>;
}
