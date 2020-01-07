import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import logo from '../../images/AdaptableBlotter.png';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

const DemoBox = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <img src={logo} style={{ maxWidth: '80%' }} />
          <div>{children}</div>
        </div>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <MainPage
      pageTitle={'Example demos'}
      description={
        <div>
          <h4>Example Demos</h4>
          <p>
            These demos show Adaptable with dummy data that mimics real life
            examples.
          </p>
          <ul>
            <li>
              <b>Bond Pricer:</b> To Do tol
            </li>
          </ul>
          Click on the buttons below to see the relevant demo.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/examples/bondpricerdemo">Bond Pricer demo</DemoBox>
      </GridLayout>
    </MainPage>
  );
};
