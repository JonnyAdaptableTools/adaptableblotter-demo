import React, { ReactNode } from 'react';
import Link from 'next/link';

import logo from '../../images/AdaptableBlotter.png';
import './index.css';

const Category = ({
  children,
  title,
}: {
  children: ReactNode;
  title: ReactNode;
}) => {
  return (
    <div className="sidenav-category">
      {title}
      <div className="sidenav-category-content">{children}</div>
    </div>
  );
};

export default () => (
  <div className="sidenav">
    <div style={{ position: 'relative', marginBottom: 140 }}>
      <Link href="/">
        <a>
          <img
            src={logo}
            style={{
              maxWidth: '100%',
              background: 'white',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </a>
      </Link>
    </div>
    <div style={{ padding: '10px 20px' }}>
      <h3 style={{ color: 'white', fontWeight: 300 }}>Demos</h3>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/aggridbasicdemo">
        <a>Basic</a>
      </Link>
      <Link href="/aggridthemingdemo">
        <a>Theme</a>
      </Link>
      <Link href="/aggridconfigdemo">
        <a>Custom config</a>
      </Link>
      <Category
        title={
          <Link href="/dashboard">
            <a>Dashboard Demos</a>
          </Link>
        }
      >
        <Link href="/dashboard/aggriddashboardtoolbarsdemo">
          <a>Dashboard Toolbars</a>
        </Link>
        <Link href="/dashboard/aggriddashboardbuttonsdemo">
          <a>Dashboard Buttons</a>
        </Link>
        <Link href="/dashboard/aggriddashboardvisibilitydemo">
          <a>Dashboard Visibility</a>
        </Link>
      </Category>
      <Link href="/aggridworldstatschartingdemo">
        <a>Charts</a>
      </Link>
      <Link href="/aggridentitlementsdemo">
        <a>Entitlements</a>
      </Link>
      <Link href="/aggridgroupingdemo">
        <a>Grouping</a>
      </Link>
    </div>
  </div>
);
