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
      pageTitle={'Query Option demos'}
      description={
        <div>
          <h4>Query Option Demos</h4>
          <p>
            Queries are a key element of the Adaptable Blotter - and they are
            used by many functions, e.g. Advanced Search, Conditional Styles,
            Reports, Alerts etc.
          </p>
          <p>
            As a result we have added a number of options to the Query Options
            property in Blotter Options to allow you manage how Queries work.
          </p>
          <p>
            Some of these options also apply when using the column filter
            dropdown and Quick Search as appropriate.
          </p>
          <p>
            We have included demos that illustrate some of these options,
            including:
          </p>
          <ul>
            <li>
              <b>Server Lookups Demo:</b> Provide the Adaptable Blotter
              dynamically with the list of values each time a list of distinct
              cell values is required.
            </li>
            <li>
              <b>Ignore Case Demo:</b> By default case is ignored when running
              queries against string columns but you can change this behaviour.
            </li>
            <li>
              <b>Max Items Displayed Demo:</b> By default when showing list of
              available column values the Blotter will show the first 5,000
              distinct values, but you can amend this number.
            </li>
          </ul>
          Click on the buttons below to see a demo for each Query Option.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/queryoptions/aggridserverlookupsdemo">
          Server Lookups demo
        </DemoBox>
        <DemoBox href="/queryoptions/aggridignorecasequeriesdemo">
          Queries Ignore Case demo
        </DemoBox>
        <DemoBox href="/queryoptions/aggridmaxitemsqueriesdemo">
          Queries Max Items Displayed demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};