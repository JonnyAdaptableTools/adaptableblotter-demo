import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import logo from '../../images/AdaptableBlotter.png';

import './index.scss';

const minBoxWidth = 220;

const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'grid',
        padding: 20,
        gridGap: 20,
        gridTemplateColumns: `repeat(auto-fit, minmax(${minBoxWidth}px, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};

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
      pageTitle={'AdaptableBlotter.JS ag-Grid Dashboard demos'}
      description={
        <div>
          <h4>Dashboard</h4>
          <p>
            You are able to set up the Dashboard (the area above the actual
            grid) so that it has exactly the look and feel that best matches
            your requirements.
          </p>
          <p>
            You are able to specify which buttons are toolbars are visible, how
            the dashboard displays, what colours are shown and much more.
          </p>
          <p>
            This is all done through Dashboard Predefined Config. See the
            examples in this section to find out more.
          </p>
        </div>
      }
    >
      <Grid>
        <DemoBox href="/dashboard/aggriddashboardbuttonsdemo">
          Dashboard buttons demo
        </DemoBox>
        <DemoBox href="/dashboard/aggriddashboardtoolbarsdemo">
          Dashboard toolbars demo
        </DemoBox>
        <DemoBox href="/dashboard/aggriddashboardvisibilitydemo">
          Dashboard visibility demo
        </DemoBox>
      </Grid>
    </MainPage>
  );
};
