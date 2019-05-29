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
      pageTitle={'Chart demos'}
      description={
        <div>
          <h4>Chart</h4>
          <p>
            The Adaptable Blotter contains powerful charting capabilities
            (courtesy of Infragistics).
          </p>
          <p>
            These examples show the Category and Pie (Doughnut) charts but other
            types are coming soon.
          </p>
          <p>
            All charts are 'live', so that they update in line with changes to
            the underlying data, and they are based on visible (not all) rows so
            will update as you filter the Grid.
          </p>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/charts/aggridcategorychartsdemo">
          Category Charts demo
        </DemoBox>
        <DemoBox href="/charts/aggridpiechartsdemo">Pie Charts demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
