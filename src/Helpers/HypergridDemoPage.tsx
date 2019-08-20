import React, { ReactNode } from 'react';
import Head from 'next/head';

//import logo from '../images/AdaptableBlotter.png';

type TypeProps = {
  pageTitle: string;
  description: ReactNode;
  children?: ReactNode;
};

export default ({ pageTitle, children, description }: TypeProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <nav style={{ marginBottom: 0, display: 'flex', flexFlow: 'row' }}>
        {description}
      </nav>
      <div id="adaptableBlotter" />
      <p />
      <div id="grid" className="hypergrid-container" />
      {children}
    </>
  );
};
