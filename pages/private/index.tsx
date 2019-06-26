import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import logo from '../../images/AdaptableBlotter.png';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

const DemoBox = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <img src={logo} style={{ maxWidth: '80%' }} />
          <div>{children}</div>
        </div>
      </a>
    </Link>
  );
};

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
