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
      pageTitle={'Column demos'}
      description={
        <div>
          <h4>Column Functions</h4>
          <p>
            There are a number of different ways to edit data in the Adaptable
            Blotter:
          </p>
          <ul>
            <li>
              <b>Calculated Column:</b> Create your own custom columns where the
              value is derived - dynamically - from the values in other columns
              in the Grid.
            </li>
            <li>
              <b>Free Text Column:</b> Create your own column where you can
              insert your own values (e.g. comments) that are stored separately
              from the Data Source.
            </li>
            <li>
              <b>Column Category:</b> Group columns together logically to help
              you to manipulate grids with very large numbers of columns.
            </li>
            <li>
              <b>Column Info:</b> Find out all the objects associated with a
              column with a single lookup.
            </li>
            <li>
              <b>Action Column:</b> Specify a column with a button (that you can
              render) and listen to the clicked event to perform any logic you
              reqiure.
            </li>
            <li>
              <b>Sparkline Column:</b> Visualise columns that contain a range /
              array of numeric cells by using a Sparkline.
            </li>
          </ul>
          Click on the buttons below to see a demo for each edit function.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/column/aggridcalculatedcolumndemo">
          Calculated Column demo
        </DemoBox>
        <DemoBox href="/column/aggridfreetextcolumndemo">
          Free Text Column demo
        </DemoBox>
        <DemoBox href="/column/aggridcolumncategorydemo">
          Column Category demo
        </DemoBox>
        <DemoBox href="/column/aggridcolumninfodemo">Column Info demo</DemoBox>
        <DemoBox href="/column/aggridactioncolumnsdemo">
          Action Column demo
        </DemoBox>
        <DemoBox href="/column/aggridsparklinecolumnsdemo">
          Sparkline Column demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
