import React from 'react';
import MainPage from '../../src/MainPage';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  return (
    <MainPage
      pageTitle={'Demos inside a proper editor'}
      description={
        <div>
          <h4>Editor demos</h4>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/editor/basic">Basic editor demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
