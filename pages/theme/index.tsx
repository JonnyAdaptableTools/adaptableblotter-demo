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
    c => c.CategoryName == 'Theming'
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
      pageTitle={'Theme demos'}
      description={
        <div>
          <h4>Theming Adaptable</h4>
          <p>
            You can theme (ie. set up the look and feel of) Adaptable entirely
            through{' '}
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
            of every control that Adaptable provides (e.g. make buttons rounded)
          </p>
          <p>
            Adaptable provides out of the box 2 themes - a <b>Dark Theme</b> and
            a <b>Light Theme</b>. Choosing either of these 2 themes will -
            depending on your Adaptable Options - also update the underlying
            vendor grid.
          </p>
          <p>
            You can change pretty much any aspect of the UI that we provide. For
            instance you can replace the icons that we show in the toolbars with
            your own. We have a demo that shows you how.
          </p>
          <ul>{demoLinks}</ul>
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
