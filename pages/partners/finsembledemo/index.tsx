import React from 'react';

import MainPage from '../../../src/MainPage';

export default () => {
  return (
    <MainPage pageTitle="">
      <p>
        <h4>Finsemble</h4>
      </p>
      <p>
        Adaptable is designed to run in single or multiple blotter mode. Its
        easy to create many instances of the Blotter and have them share data,
        events and state.
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
        We have a demo coming soon but in the meantime here are a couple of
        videos that show how Finsemble enables multiple Adaptable Blotters to
        share state, data and events. .
      </p>
      <p>
        <iframe
          width="840"
          height="630"
          src="https://www.youtube.com/embed/Xz4IUPeYW8c"
        />
      </p>
      <p>
        <iframe
          width="840"
          height="630"
          src="https://www.youtube.com/embed/amhRqx1FFsc"
        />
      </p>
    </MainPage>
  );
};
