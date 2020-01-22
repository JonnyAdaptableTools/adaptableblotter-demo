import React, { ReactNode } from 'react';
import Head from 'next/head';

import './index.css';

type TypeProps = {
  pageTitle: string;
  description: ReactNode;
  children: ReactNode;
};

export default ({ pageTitle, children, description }: TypeProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <nav style={{ marginBottom: 0, display: 'flex', flexFlow: 'row' }}>
        <img src={'/images/Adaptable.png'} height="50" />

        {description}
      </nav>
      <div style={{ flex: 1, position: 'relative' }}>{children}</div>
    </>
  );
};
