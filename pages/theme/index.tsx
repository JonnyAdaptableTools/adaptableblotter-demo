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
      pageTitle={'Theme demos'}
      description={
        <div>
          <h4>Theming the Adaptable Blotter</h4>
          <p>
            You can theme (ie. set up the look and feel of) the Adaptable
            Blotter entirely through CSS Variables.{' '}
          </p>
          <p>
            You are able to change the font and entire colour scheme by setting
            just a few main properties.{' '}
          </p>
          <p>
            And if you want to get more detailed then you can change the details
            of every control that the Adaptable Blotter provides (e.g. make
            buttons rounded)
          </p>
          <p>
            The Adaptable Blotter provides out of the box 2 themes - a{' '}
            <b>Dark Theme</b> and a <b>Light Theme</b>. Choosing either of these
            2 themes will - depending on your Blotter Options - also update the
            underlying vendor grid.
          </p>
          Click on the buttons below to see a demo for each styling function.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/theme/aggriddarkthemedemo">Dark Theme demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
