import React from 'react';

import MainPage from '../../../src/MainPage';
//import finsembleDemoImage from '../../../images/FinsembleDemo.png';

export default () => {
  return (
    <MainPage pageTitle="">
      <p>
        <h4>Finsemble</h4>
      </p>
      <p>
        The Adaptable Blotter is designed to run in single or multiple blotter
        mode. Its easy to create many instances of the Blotter and have them
        share data, events and state.
      </p>
      <p>
        However if you want to enjoy cutting-edge multiple blotter functionality
        then we partner with{' '}
        <a href="https://www.chartiq.com/finsemble/" target="_blank">
          Finsemble
        </a>{' '}
        (by ChartIQ) which offers a fantastic multi-windowed, multi-application
        experience.
      </p>
      <p>
        We have a demo coming soon but in the meantime see this{' '}
        <a href="https://www.youtube.com/watch?v=amhRqx1FFsc" target="_blank">
          video
        </a>{' '}
        that shows 3 Adaptable Blotters running inside Finsemble.
      </p>
      <p>
        <br />
        {/*
          <img src={'../../../images/FinsembleDemo.png'} style={{ maxWidth: '70%' }} />
      
        <img src={finsembleDemoImage} style={{ maxWidth: '70%' }} />
              */}
      </p>
    </MainPage>
  );
};
