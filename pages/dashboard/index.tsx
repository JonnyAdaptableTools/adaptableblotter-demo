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
          <h4>See demos below</h4>
        </div>
      }
    >
      <Grid>
        <DemoBox href="/dashboard/aggriddashboardtoolbarsdemo">
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
