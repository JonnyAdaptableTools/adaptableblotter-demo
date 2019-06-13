import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import finsembleDemoImage from '../../images/finsembledemopage.png';
import openfinDemoImage from '../../images/openfindemopage.png';
import ipushpullDemoImage from '../../images/ipushpulldemopage.png';
import './index.scss';
import GridLayout from '../../src/components/GridLayout';

const DemoBox = ({
  href,
  children,
  imageName,
}: {
  href: string;
  children: ReactNode;
  imageName: string;
}) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={imageName}
              style={{
                width: '80%',
                height: '50%',
              }}
            />
          </div>
          <br />
          <div style={{ textAlign: 'center' }}>
            <h4> {children}</h4>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <MainPage
      pageTitle={'Partners'}
      description={
        <div>
          <h4>Partners</h4>
          <p>
            The Adaptable Blotter partners with many of the other leading
            FinTechs who are revolutionising the desktop. This section (under
            development) will show some of the work we do in this regard.{' '}
          </p>
          <p>Our partnerships include:</p>
          <p>
            <b>Finsemble</b>: We leverage the powerful offering to enable
            multiple Blotter to share state, data and events.
          </p>{' '}
          <p>
            <b>OpenFin</b>: If you are using this popular container we offer
            'Live Updates' so that data exported to Excel updates in real time
            as the Blotter ticks or is edited.
          </p>
          <p>
            <b>iPushPull</b>: Export Blotter data to Excel (with Live Updates)
            or Symphony and elsewhere by using the services of our partner
            iPushPull.
          </p>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/partners/finsembledemo" imageName={finsembleDemoImage}>
          Finsemble demo
        </DemoBox>{' '}
        <DemoBox href="/partners/openfindemo" imageName={openfinDemoImage}>
          OpenFin demo
        </DemoBox>
        <DemoBox href="/partners/ipushpulldemo" imageName={ipushpullDemoImage}>
          iPushPull demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
