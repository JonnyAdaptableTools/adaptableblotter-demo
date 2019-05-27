import React, { ReactNode } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';

type TypeProps = {
  pageTitle: string;
  description: ReactNode;
  children: ReactNode;
  config: any;
  blotterOptions: any;
};

export default ({
  pageTitle,
  children,
  description,
  config,
  blotterOptions,
}: TypeProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Sidebar />

      <div className="main">
        <div className="demodescription">{description} </div>
        <div id="adaptableBlotter" />
        <p />
        <div
          id="grid"
          className="ag-theme-balham"
          style={{ height: '500px', marginRight: '50px' }}
        />
        {children}
        <div className="config">
          <b>Predefined Config</b>
          <br />
          <pre>{config}</pre>
        </div>
        <div className="config">
          <b>Blotter Options</b>
          <br />
          <pre>{blotterOptions}</pre>
        </div>
      </div>
    </>
  );
};
