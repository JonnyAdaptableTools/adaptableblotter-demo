import React from 'react';
import Link from 'next/link';

export default () => {
  return (
    <div className="sidenav">
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/aggridbasicdemo">
        <a>Basic</a>
      </Link>

      <Link href="/aggridthemingdemo">
        <a>Theme</a>
      </Link>
      <i>Dashboard</i>
      <Link href="/aggriddashboardtoolbarsdemo">
        <a>Toolbars</a>
      </Link>
      <Link href="/aggriddashboardbuttonsdemo">
        <a>Buttons</a>
      </Link>
      <Link href="/aggriddashboardvisibilitydemo">
        <a>Visibility</a>
      </Link>
      <Link href="/aggridworldstatschartingdemo">
        <a>Charts</a>
      </Link>
      <Link href="/aggridentitlementsdemo">
        <a>Entitlements</a>
      </Link>
    </div>
  );
};
