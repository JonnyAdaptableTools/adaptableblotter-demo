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
      pageTitle={'Alerts and Messages demos'}
      description={
        <div>
          <h4>Alerts and Messages Functions</h4>
          <p>The Adaptable Blotter lets you send and receive messages.</p>
          <ul>
            <li>
              <b>Alert:</b> Be notified as soon as data changes that you need to
              know about.
            </li>
            <li>
              <b>Reminder:</b> Set up scheduled notifications so you can be
              reminded of important actions.
            </li>
          </ul>
          Click on the buttons below to see a demo for our Alert and Messaging
          functions.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/alertsmessages/aggridalertdemo">Alert demo</DemoBox>
        <DemoBox href="/alertsmessages/aggridreminderdemo">
          Reminder demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
