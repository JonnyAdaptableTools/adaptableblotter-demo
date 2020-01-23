import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  return (
    <MainPage
      pageTitle={'User Interface State demos'}
      description={
        <div>
          <h4>User Interface State Demos</h4>
          <p>
            Queries are a key element of AdapTable - and they are used by many
            functions, e.g. Advanced Search, Conditional Styles, Reports, Alerts
            etc.
          </p>
          <p>
            As a result we have added a number of options to the Query Options
            property in Adaptable Options to allow you manage how Queries work.
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
              <b>Server Lookups Demo:</b> Provide AdapTable dynamically with the
              list of values each time a list of distinct cell values is
              required.
            </li>
            <li>
              <b>Ignore Case Demo:</b> By default case is ignored when running
              queries against string columns but you can change this behaviour.
            </li>
            <li>
              <b>Max Items Displayed Demo:</b> By default when showing list of
              available column values, AdapTable will show the first 5,000
              distinct values, but you can amend this number.
            </li>
          </ul>
          Click on the buttons below to see a demo for each Query Option.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/userinterfacestate/aggridcolorpalettedemo">
          Color Palette demo
        </DemoBox>
        <DemoBox href="/userinterfacestate/aggridpermittedvaluesdemo">
          Permitted Values demo
        </DemoBox>
        <DemoBox href="/userinterfacestate/aggrideditlookupcolumnsdemo">
          Edit Lookup Columns demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
