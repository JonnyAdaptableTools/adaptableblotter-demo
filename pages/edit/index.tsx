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
      pageTitle={'Edit demos'}
      description={
        <div>
          <h4>Edit Functions</h4>
          <p>
            There are a number of different ways to edit data in the Adaptable
            Blotter:
          </p>
          <ul>
            <li>
              <b>Smart Edit:</b> Update contiguous numeric cells using a
              mathmatical operation.
            </li>
            <li>
              <b>Bulk Update:</b> Update contiguous cells in a column to all
              contain the same value.
            </li>
            <li>
              <b>Shortcut:</b> To do.
            </li>
          </ul>
          Click on the buttons below to see a demo for each edit function.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/edit/aggridsmarteditdemo">Smart Edit demo</DemoBox>
        <DemoBox href="/edit/aggridbulkupdatedemo">Bulk Update demo</DemoBox>
        <DemoBox href="/edit/aggridshortcutdemo">Shortcut demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
