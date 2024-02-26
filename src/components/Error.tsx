import { ErrorProp } from '../types';

const errorStyle = {
  color: 'red',
};


const Error = (props: ErrorProp) => {
  if (props.message) {
    return <div style={errorStyle}>{props.message}</div>;
  }
  return null;
};

export default Error;
