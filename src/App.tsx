import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import moment from 'moment';

import './bootstrap.min.css';
import Navbar from './Navbar';
import Page from './Page';

const INTERVAL = 100;
const initialTime = new Date();

const App: React.FC = () => {
  const [time, setTime] = useState(() => initialTime);
  useEffect(() => {
    // Do we use setTimeout or setInterval
    // Using setTimeout may call too many times
    // Basic testing returned maxium stack
    const refresh = () => {
      setTime(new Date());
    };

    const interval = setInterval(refresh, INTERVAL);

    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Container className="pt-3">
        Start Time: {moment(initialTime).format('YYYY/MM/DD LTS - [W]W/[D]E dddd')}
        <Page time={time} />
      </Container>
    </div>
  );
}

export default App;