import React, { ReactNode } from 'react';
import Head from 'next/head';

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

      <div className="sidenav">
        <img src="_next/static/images/AdaptableBlotter.png" />
        <h5>Demos</h5>
        <a href="">Home</a>
        <a href="aggridbasicdemo">Basic</a>
        <a href="aggridthemingdemo">Theme</a>
        <a href="aggriddashboarddemo">Dashboard</a>
        <a href="aggridworldstatschartingdemo">Charts</a>
      </div>

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
