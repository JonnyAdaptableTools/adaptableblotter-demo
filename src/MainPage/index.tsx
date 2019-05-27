import React, { ReactNode } from 'react';
import Head from 'next/head';

import '../demo.css';
import Sidebar from '../Sidebar';

export type MainPageProps = {
  pageTitle: string;
  children?: ReactNode;
};

export default ({ pageTitle, children }: MainPageProps) => {
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

      <div className="main">{children}</div>
    </div>
  );
};
