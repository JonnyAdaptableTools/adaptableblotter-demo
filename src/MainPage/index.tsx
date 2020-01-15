import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';

import './index.css';
import Sidebar from '../Sidebar';

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
    (window as any).docsearch({
      apiKey: process.env.ALGOLIA_KEY,
      indexName: 'adaptableBlotter',
      inputSelector: '#searchInput',
      debug: true, // Set debug to true if you want to inspect the dropdown
    });
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
        <div style={{ textAlign: 'right' }}>
          <input
            style={{ marginBottom: 20, padding: 10, minWidth: '15rem' }}
            type="text"
            id="searchInput"
            placeholder="Search AdapTable Demos"
          />
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
