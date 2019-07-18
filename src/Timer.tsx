import React from 'react';

interface Props {
  ms: number
}

const Timer: React.FC<Props> = (props) => {
  const totalMs = props.ms;

  const ms = props.ms % 1000;
  const seconds = Math.floor(totalMs / 1000 % 60);
  const minutes = Math.floor(totalMs / 1000 / 60 % 60);
  const hours = Math.floor(totalMs / 1000 / 60 / 60);

  let string = '';
  if (hours) {
    string += `${hours}h`;
  }

  if (minutes) {
    string += `${minutes}m`;
  }

  string += `${seconds}s${ms.toString().padEnd(3, '0')}`;

  return <span style={{fontFamily: 'monospace'}}>{string}</span>;
}

export default Timer;