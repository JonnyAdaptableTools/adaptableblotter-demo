import React, { useState, useLayoutEffect } from 'react';
import NextLink from 'next/link';

import { withRouter } from 'next/router';

import Category from './Category';

import './index.scss';

import {
  getDemoPageStructure,
  DemoCategory,
  DemoPage,
} from '../../DemoList/demolist';
import ArrowRight from './Category/arrow-right';
import ArrowLeft from './Category/arrow-left';

const arrowLeft = <ArrowLeft />;
const arrowRight = <ArrowRight />;

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

const Sidebar = () => {
  const [expanded, setExpanded] = useState(
    process.browser
      ? JSON.parse(localStorage.getItem('expanded') || 'true')
      : true
  );
  /**
   * this is crazy - count is needed because
   * React does not reflect updates correctly - probably some SSR issue
   */
  const [count, setCount] = useState(Date.now());

  const toggleSidebar = () => {
    const newExpanded = !expanded;

    setExpanded(newExpanded);
    setCount(c => c + 1);
    localStorage.setItem('expanded', `${newExpanded}`);
  };

  useLayoutEffect(() => {
    const expanded = window.localStorage
      ? JSON.parse(localStorage.getItem('expanded') || 'true')
      : true;

    setCount(c => c + 1);
    setExpanded(expanded);
  }, []);

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
  /**
   * this is crazy - count is needed because
   * React does not reflect updates correctly - probably some SSR issue
   */
  const className = `sidebar---${count} sidebar sidebar--${
    expanded ? 'expanded' : 'collapsed'
  }`;

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexFlow: 'column',
      }}
    >
      <div
        className="sidebar-collapse-tool"
        onClick={toggleSidebar}
        title={expanded ? 'Click to collapse' : 'Click to expand'}
      >
        {expanded ? arrowLeft : arrowRight}
      </div>
      <div className="sidebar-container" style={{ flex: 1, overflow: 'auto' }}>
        <h3
          style={{
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 200,
            marginTop: 'var(--demo-space-3)',
            fontSize: 'var(--demo-font-size-6)',
          }}
        >
          AdapTable Demos
        </h3>

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

export default Sidebar;
