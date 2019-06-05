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
              <b>Theme:</b> Style the entire grid with our Light or Dark themes,
              or with a theme that you provide yourself.
            </li>
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
              <b>Percent Bar:</b> Show numeric columns as a bar, that is filled
              according to the cell value as a %.
            </li>
          </ul>
          Click on the buttons below to see a demo for each edit function.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/style/aggridthemingdemo">Theming demo</DemoBox>
        <DemoBox href="/style/aggridconditionalstyledemo">
          Conditional Style demo
        </DemoBox>
        <DemoBox href="/style/aggridcformatcolumndemo">
          Format Column demo
        </DemoBox>
        <DemoBox href="/style/aggridflashingcelldemo">
          Flashing Cell demo
        </DemoBox>
        <DemoBox href="/style/aggridpercentbardemo">Percent Bar demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
