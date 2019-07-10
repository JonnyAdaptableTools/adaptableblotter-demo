import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';

import './index.css';
import Sidebar from '../Sidebar';

export type MainPageProps = {
  pageTitle: string;
  children?: ReactNode;
  description?: ReactNode;
};

export default ({ pageTitle, children, description }: MainPageProps) => {
  return (
    <div
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
        {description ? (
          <div className="demodescription">{description}</div>
        ) : null}
        <div id="aboveGridDiv"></div>
        {children}
      </div>
    </div>
  );
};
