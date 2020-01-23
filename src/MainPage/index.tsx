import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';

import './index.scss';
import Sidebar from '../Sidebar';
import Logo from '../components/Logo';

export type MainPageProps = {
  pageTitle: string;
  children?: ReactNode;
  className?: string;
  description?: ReactNode;
};

export default ({
  className,
  pageTitle,
  children,
  description,
}: MainPageProps) => {
  useEffect(() => {
    if (process.env.ALGOLIA_KEY) {
      (window as any).docsearch({
        apiKey: process.env.ALGOLIA_KEY,
        indexName: 'adaptableblotter',
        inputSelector: '#searchInput',
        debug: true, // Set debug to true if you want to inspect the dropdown
      });
    }
  });

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexFlow: 'row',
        height: '100%',
        alignItems: 'stretch',
      }}
    >
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Sidebar />

      <div className="main">
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Logo />
          <div style={{ flex: 1 }}></div>
          <input
            style={{
              padding: 'var(--demo-space-2)',
              minWidth: '15rem',
            }}
            type="text"
            id="searchInput"
            placeholder="Search AdapTable Demos"
          />
        </div>
        <div style={{ textAlign: 'right' }}>
          <button
            title="Clear all state from all demos to return to original predefined config"
            style={{
              padding: 'var(--demo-space-1) var(--demo-space-2)',
              cursor: 'pointer',
              fontSize: 'var(--sidebar_font-size)',
              marginBottom: 'var(--demo-space-3)',
            }}
            onClick={() => {
              localStorage.clear();
              window.location.href = window.location.href;
            }}
          >
            Clear state
          </button>
        </div>

        {description ? (
          <div className="demodescription">{description}</div>
        ) : null}
        <div id="aboveGridDiv"></div>
        {children}
      </div>
    </div>
  );
};
