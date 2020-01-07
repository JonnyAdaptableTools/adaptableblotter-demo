import React, { useEffect } from 'react';
import NextLink from 'next/link';

import { withRouter } from 'next/router';

import Category from './Category';

import './index.scss';
import Logo from './Logo';
import {
  getDemoPageStructure,
  DemoCategory,
  DemoPage,
} from '../../DemoList/demolist';

if (global.console) {
  const log = global.console.log;
  global.console.log = (...args: any[]) => {
    if ((global as any).ConsoleLog) {
      (global as any).ConsoleLog(...args);
    }
    return log(...args);
  };
}

const Link = withRouter(
  ({
    router,
    href,
    children,
  }: {
    router: any;
    href: string;
    children: any;
  }) => {
    const active = router.pathname === href;
    if (active) {
      children = React.cloneElement(children, {
        className: 'active-link',
        active: true,
      });
    }

    return <NextLink href={href}>{children}</NextLink>;
  }
);

export default () => {
  let demoPages: any = getDemoPageStructure().Categories.map(
    (category: DemoCategory) => {
      let demoPages = category.Pages.map((page: DemoPage) => {
        return (
          <Link key={page.Name} href={page.Link}>
            <a>{page.Name}</a>
          </Link>
        );
      });
      return (
        <Category
          key={category.CategoryName}
          title={
            <Link key={category.Link} href={category.Link}>
              <a>{category.CategoryName}</a>
            </Link>
          }
        >
          {demoPages}
        </Category>
      );
    }
  );

  return (
    <div
      className="sidebar"
      style={{
        display: 'flex',
        flexFlow: 'column',
      }}
    >
      <Logo />
      <div className="sidebar-container" style={{ flex: 1, overflow: 'auto' }}>
        <h3 style={{ color: 'white', fontWeight: 200, marginTop: 5 }}>Demos</h3>
        <div
          style={{
            padding: '10px 20px',
            display: 'inline-flex',
            justifyContent: 'center',
            flexFlow: 'row',
          }}
        >
          <button
            title="Clear all state from all demos to return to original predefined config"
            style={{
              padding: '2px 4px',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
            onClick={() => {
              localStorage.clear();
              window.location.href = window.location.href;
            }}
          >
            Clear state
          </button>
        </div>

        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/AdaptableDemoList">
          <a>Demo List</a>
        </Link>
        {demoPages}
      </div>
    </div>
  );
};
