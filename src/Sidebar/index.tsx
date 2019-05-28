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
    <div style={{ position: 'relative' }}>
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
    <div style={{ padding: '10px 20px', marginTop: '70px' }}>
      <h3 style={{ color: 'white', fontWeight: 200 }}>Demos</h3>
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
            <a>Dashboard</a>
          </Link>
        }
      >
        <Link href="/dashboard/aggriddashboardtoolbarsdemo">
          <a>Toolbars</a>
        </Link>
        <Link href="/dashboard/aggriddashboardbuttonsdemo">
          <a>Buttons</a>
        </Link>
        <Link href="/dashboard/aggriddashboardvisibilitydemo">
          <a>Visibility</a>
        </Link>
      </Category>
      <Category
        title={
          <Link href="/charts">
            <a>Charts</a>
          </Link>
        }
      >
        <Link href="/charts/aggridcategorychartsdemo">
          <a>Category Charts</a>
        </Link>
        <Link href="/charts/aggridpiechartsdemo">
          <a>Pie Charts</a>
        </Link>
      </Category>
      <Category
        title={
          <Link href="/misc">
            <a>Misc</a>
          </Link>
        }
      >
        <Link href="/misc/aggridentitlementsdemo">
          <a>Entitlements</a>
        </Link>
        <Link href="/misc/aggridgroupingdemo">
          <a>Grouping</a>
        </Link>
      </Category>
      <Category
        title={
          <Link href="/search">
            <a>Search</a>
          </Link>
        }
      >
        <Link href="/search/aggridadvancedsearchdemo">
          <a>Advanced Search</a>
        </Link>
        <Link href="/search/aggridquicksearchdemo">
          <a>Quick Search</a>
        </Link>
      </Category>
    </div>
  </div>
);
