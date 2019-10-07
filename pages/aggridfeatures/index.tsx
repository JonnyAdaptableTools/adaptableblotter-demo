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
      pageTitle={'agGrid Features demos'}
      description={
        <div>
          <h4>ag Grid Features Demos</h4>
          <p>
            ag-Grid provides many advanced features for (row and column)
            grouping, pivoting, tree views and master-detail grids. The
            Adaptable Blotter works well for each of these.
          </p>
          <ul>
            <li>
              <b>Row Grouping Demo:</b> The Adaptable Blotter works fully when
              the ag-Grid column row grouping functionality is applied.
            </li>
            <li>
              <b>Column Grouping Demo:</b> The Adaptable Blotter works fully
              when the ag-Grid column banding (grouping) functionality is
              applied.
            </li>
            <li>
              <b>Master Detail Demo:</b> The Adaptable Blotter supports Master /
              Detail grids where the underlying vendor grid offers it.
            </li>
            <li>
              <b>Row Selection Demo:</b> The Adaptable Blotter fires an event
              each time the cell or row selection changes. This includes full
              detials of the cells and rows selected.
            </li>
          </ul>
          Click on the buttons below to see a demo for each administrative task.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/aggridfeatures/aggridrowgroupingdemo">
          Row Grouping demo
        </DemoBox>
        <DemoBox href="/aggridfeatures/aggridcolumngroupingdemo">
          Column Grouping demo
        </DemoBox>
        <DemoBox href="/aggridfeatures/aggridmasterdetaildemo">
          Master Detail demo
        </DemoBox>
        <DemoBox href="/aggridfeatures/aggridrowselectiondemo">
          Row Selection demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
