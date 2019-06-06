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
              <b>Grouping Demo:</b> The Adaptable Blotter works fully when the
              ag-Grid column banding, pivoting, aggregration and grouping
              functionality is all applied.
            </li>
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
        <DemoBox href="/admin/aggridgroupingdemo">Grouping demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
