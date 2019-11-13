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
      pageTitle={'Admin demos'}
      description={
        <div>
          <h4>Administrative Demos</h4>
          <p>
            Administrators are able to set up the Grid exactly how they like,
            permission users, and have full visibility over all that goes on in
            the Blotter.
          </p>
          <ul>
            <li>
              <b>Entitlements:</b> Manage which functions your users have access
              tol
            </li>
            <li>
              <b>Audit Log Demo:</b> Every data change, user action, state
              change and function action is auditable and availalbe for you to
              listen to in a number of ways, making support a breeze and
              enabling data playback.
            </li>
            <li>
              <b>API Demo:</b> Access the Adaptable Blotter functionality and
              state through the Blotter API which contains hundreds of functions
              giving full programmatic access to everything the Adaptable
              Blotter provides.
            </li>
            <li>
              <b>Big Data Demo:</b> See the Adaptable Blotter (and ag-Grid) with
              100,000 rows of client side data.
            </li>
            <li>
              <b>DataSource Changes Demo:</b> Any changes made to the data
              source to the underlying DataGrid (in this example ag-Grid) is
              automatically reflected in the Adaptable Blotter and it will be
              picked up by all relevant functions.
            </li>

            <li>
              <b>No Code Demo:</b> The no code version allows you to create an
              Adaptable Blotter at runtime from any JSON or Excel file that you
              give it. Immediately you will have an Adaptable Blotter with all
              the rich functions it contains including advanced functionality
              like state management and full audit.
            </li>
            {/*  <li>
              <b>Best Ex Demo:</b> Shows how you can use the Adaptable Blotter
              Audit Log and Calculated Columns to prove Best Ex.
            </li>
           */}
          </ul>
          Click on the buttons below to see a demo for each administrative task.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/admin/aggridentitlementsdemo">
          Entitlements demo
        </DemoBox>
        <DemoBox href="/admin/aggridauditdemo">Audit Log demo</DemoBox>
        <DemoBox href="/admin/aggridblotterapidemo">API demo</DemoBox>
        <DemoBox href="/admin/aggridbigdatademo">Big Data demo</DemoBox>
        <DemoBox href="/admin/aggridnocodedemo">No Code demo</DemoBox>
        <DemoBox href="/admin/aggriddatasourcechangesdemo">
          DataSource Changes demo
        </DemoBox>

        {/* <DemoBox href="/admin/aggridbestexdemo">Best Ex demo</DemoBox>*/}
      </GridLayout>
    </MainPage>
  );
};
