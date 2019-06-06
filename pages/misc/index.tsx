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
      pageTitle={'Misc demos'}
      description={
        <div>
          <h4>Misc</h4>
          <p>line on entitlements</p>
          <p>line on grouping</p>
          <p>line on audit</p>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/misc/aggridentitlementsdemo">Entitlements demo</DemoBox>
        <DemoBox href="/misc/aggridgroupingdemo">Grouping demo</DemoBox>
        <DemoBox href="/misc/aggridauditdemo">Audit demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
