import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import { Button, Input } from 'reactstrap';

import Timer from './Timer';

interface Props {
  time: Date
}

const Page: React.FC<Props> = (props) => {
  const [timers, setTimers] = useState(() => [{
    id: uuidv4(),
    label: 'Start time',
    date: props.time,
  }]);

  const rows = timers.map((timer, index) => {
    // @ts-ignore
    const difference = props.time - timer.date;

    const onChange = (newLabel: string) => {
      timers[index].label = newLabel;
    }

    return (
      <tr key={timer.id}>
        <td className="text-right"><Timer ms={difference} /></td>
        <td>
          <Input onChange={(e) => onChange(e.target.value)} defaultValue={timer.label} />
        </td>
      </tr>
    );
  });

  const onClick = () => {
    const newTimers = timers.slice();
    newTimers.push({
      id: uuidv4(),
      label: '',
      date: new Date(),
    });
    setTimers(newTimers);
  }

  return (
    <>
      <table className="table">
        <tbody>
          {rows}
        </tbody>
      </table>
      <Button onClick={onClick}>
        Add and Start
      </Button>
    </>
  );
}

export default Page;