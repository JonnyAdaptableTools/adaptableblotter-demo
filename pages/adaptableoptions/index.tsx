import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import logo from '../../images/AdaptableBlotter.png';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

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
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Adaptable Options'
  )!.Pages;

  let demoLinks: any = categoryPages.map((page: DemoPage) => {
    return (
      <li>
        <b>{page.Name}: </b> {page.Description}
      </li>
    );
  });

  let demoBoxes: any = categoryPages.map((page: DemoPage) => {
    let title = page.Name + ' Demo';
    return (
      <DemoBox key={page.Name} href={page.Link}>
        {title}
      </DemoBox>
    );
  });
  return (
    <MainPage
      pageTitle={'Adaptable Option demos'}
      description={
        <div>
          <h4>Adaptable Option Demos</h4>
          <p>
            When you create an instance of Adaptable you will create an{' '}
            <b>AdaptableOptions</b> object.
          </p>
          <p>
            This has a very large number of properties which allow you complete
            control over how you set up your Adaptable instance, and we have
            used many of them in the demos above (e.g. the Audit Log demo in the
            Admin section).
          </p>
          <p>
            This section contains a series of demos each of which highlights a
            different property in AdaptableOptions.
          </p>
          <p>These include:</p>
          <ul>{demoLinks}</ul>
          Click on the buttons below to see the Adaptable Options demos.
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
