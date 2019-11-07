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
      pageTitle={'Style demos'}
      description={
        <div>
          <h4>Styling Functions</h4>
          <p>
            There are a number of different ways to style cells, columns, rows
            and the Grid itself.
          </p>
          <ul>
            <li>
              <b>Conditional Style:</b> Style cells, columns and rows in
              striking ways when their data matches rules that you create.
            </li>
            <li>
              <b>Format Column:</b> Style an entire column so that it has a
              distinctive look.
            </li>
            <li>
              <b>Flashing Cell:</b> Have cells flash briefly when their contents
              change (using colours and duration you specify)
            </li>
            <li>
              <b>Updated Rows:</b> Colour (and jump to) rows as they update so
              you can see which rows have changed.
            </li>
            <li>
              <b>Percent Bar:</b> Show numeric columns as a bar, that is filled
              according to the cell value as a %.
            </li>
            <li>
              <b>Row Styles:</b> Choose to style rows in the Adaptable Blotter
              using your preferred colour scheme.
            </li>
          </ul>
          Click on the buttons below to see a demo for each styling function.
          <br />
          If you want to theme the actual Adaptable Blotter itself (e.g. change
          the colours, look and feel then please refer to the{' '}
          <a href="./theme" target="_self">
            Theming
          </a>
          section).
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/style/aggridconditionalstyledemo">
          Conditional Style demo
        </DemoBox>
        <DemoBox href="/style/aggridformatcolumndemo">
          Format Column demo
        </DemoBox>
        <DemoBox href="/style/aggridflashingcelldemo">
          Flashing Cell demo
        </DemoBox>
        <DemoBox href="/style/aggridupdatedrowsdemo">Updated Rows demo</DemoBox>
        <DemoBox href="/style/aggridpercentbardemo">Percent Bar demo</DemoBox>
        <DemoBox href="/style/aggridrowstyledemo">Row Style demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
