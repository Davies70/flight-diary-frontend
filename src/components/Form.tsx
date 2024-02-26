import { useState } from 'react';
import { FormProp } from '../types';

const Form = ({ createDiary }: FormProp) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    createDiary({
      date,
      visibility,
      weather,
      comment,
    });
  };

  const clearFields = () => {
    setDate('');
    setVisibility('');
    setComment('');
    setWeather('');
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          date:{' '}
          <input
            value={date}
            type='date'
            min='2000-01-01'
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          <fieldset>
            <legend>Please select your preferred visibility</legend>
            <div>
              <input
                name='visibility'
                value='great'
                type='radio'
                id='great'
                onChange={(event) => setVisibility(event.target.value)}
              />
              <label htmlFor='great'>great</label>
              <input
                name='visibility'
                value='good'
                type='radio'
                id='good'
                onChange={(event) => setVisibility(event.target.value)}
              />
              <label htmlFor='good'>good</label>
              <input
                name='visibility'
                value='ok'
                type='radio'
                id='ok'
                onChange={(event) => setVisibility(event.target.value)}
              />
              <label htmlFor='ok'>ok</label>
              <input
                name='visibility'
                value='poor'
                type='radio'
                id='poor'
                onChange={(event) => setVisibility(event.target.value)}
              />
              <label htmlFor='poor'>poor</label>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Please select your preferred weather</legend>
            <div>
              <input
                name='weather'
                value='sunny'
                type='radio'
                id='sunny'
                onChange={(event) => setWeather(event.target.value)}
              />
              <label htmlFor='sunny'>sunny</label>
              <input
                name='weather'
                value='rainy'
                type='radio'
                id='rainy'
                onChange={(event) => setWeather(event.target.value)}
              />
              <label htmlFor='rainy'>rainy</label>
              <input
                name='weather'
                value='cloudy'
                type='radio'
                id='cloudy'
                onChange={(event) => setWeather(event.target.value)}
              />
              <label htmlFor='cloudy'>cloudy</label>
              <input
                name='weather'
                value='stormy'
                type='radio'
                id='stormy'
                onChange={(event) => setWeather(event.target.value)}
              />
              <label htmlFor='stormy'>stormy</label>
              <input
                name='weather'
                value='windy'
                type='radio'
                id='windy'
                onChange={(event) => setWeather(event.target.value)}
              />
              <label htmlFor='stormy'>windy</label>
            </div>
          </fieldset>
        </div>

        <div>
          comment:{' '}
          <input
            value={comment}
            id='comment'
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <button type='submit'>add</button>
        <button onClick={clearFields}>clear fields</button>
      </form>
    </div>
  );
};

export default Form;
