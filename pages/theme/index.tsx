import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

const DemoBox = ({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href}>
      <a>
        {' '}
        <div className="demo-box" style={{ height: '300px', width: '300px' }}>
          <h4>{title}</h4>
          {children}
        </div>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <MainPage
      pageTitle={'Theme demos'}
      description={
        <div>
          <h4>Theming the Adaptable Blotter</h4>
          <p>
            You can theme (ie. set up the look and feel of) the Adaptable
            Blotter entirely through{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
              target="_blank"
            >
              CSS variables
            </a>
            .
          </p>
          <p>
            You are able to change the font and entire colour scheme by setting
            just a few main properties.{' '}
          </p>
          <p>
            And if you want to get more detailed then you can change the details
            of every control that the Adaptable Blotter provides (e.g. make
            buttons rounded)
          </p>
          <p>
            The Adaptable Blotter provides out of the box 2 themes - a{' '}
            <b>Dark Theme</b> and a <b>Light Theme</b>. Choosing either of these
            2 themes will - depending on your Blotter Options - also update the
            underlying vendor grid.
          </p>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/theme/aggriddarkthemedemo" title="Dark Theme Demo">
          <p>See the Adaptable Blotter using the shipped Dark Theme.</p>
          <p>
            When you use this theme the Adaptable Blotter will automatically
            update the underlying vendor grid to match.
          </p>
        </DemoBox>
        <DemoBox href="/theme/aggridcustomthemedemo" title="Custom Theme Demo">
          <p>
            See the Adaptable Blotter using a custom theme (based on Wimbledon
            tennis colours).
          </p>
          <p>
            When you use this theme the Adaptable Blotter will automatically
            update the underlying vendor grid to match.
          </p>
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
