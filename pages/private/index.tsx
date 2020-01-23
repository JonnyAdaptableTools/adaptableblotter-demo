import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  return (
    <MainPage
      pageTitle={'Private demos'}
      description={
        <div>
          <h4>Private Demos</h4>
          <p>Private demos</p>
          <ul>
            <li>
              <b>CFG :</b> To Do
            </li>
          </ul>
          Click on the buttons below to see the relevant demo.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/private/cfgdemo">CFG demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
