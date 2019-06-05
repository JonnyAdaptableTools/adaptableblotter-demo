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
              <b>Theme:</b> Update contiguous numeric cells using a mathmatical
              operation.
            </li>
            <li>
              <b>Conditional Style:</b> Update contiguous cells in a column to
              all contain the same value.
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
      </GridLayout>
    </MainPage>
  );
};
