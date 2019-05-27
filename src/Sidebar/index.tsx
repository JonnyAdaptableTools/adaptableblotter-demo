import React from 'react';
import Link from 'next/link';

import logo from '../../images/AdaptableBlotter.png';
import './index.css';

export default () => (
  <div className="sidenav">
    <div style={{ position: 'relative', marginBottom: 100 }}>
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
      <h5>Demos</h5>
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
      <Link href="/dashboard/aggriddashboardbuttonsdemo">
        <a>Dashboard</a>
      </Link>
      <Link href="/dashboard/aggriddashboardbuttonsdemo">
        <a>Dashboard second demo</a>
      </Link>
      <Link href="/aggridworldstatschartingdemo">
        <a>Charts</a>
      </Link>
      <Link href="/aggridentitlementsdemo">
        <a>Entitlements</a>
      </Link>
    </div>
  </div>
);
