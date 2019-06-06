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
      pageTitle={'Partners'}
      description={
        <div>
          <h4>Partners</h4>
          <p>line on OpenFin</p>
          <p>line on Finsemble</p>
          <p>to do</p>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/partners/openfindemo">OpenFin demo</DemoBox>
        <DemoBox href="/partners/finsembledemo">Finsemble demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
