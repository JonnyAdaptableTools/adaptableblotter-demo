import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

const DemoBox = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <img
            src={'/images/Adaptable.png'}
            style={{ maxWidth: '80%', marginBottom: '5%' }}
          />
          <div>{children}</div>
        </div>
      </a>
    </Link>
  );
};

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Searching'
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
        <div style={{ fontSize: 'larger' }}>{title}</div>
      </DemoBox>
    );
  });

  return (
    <MainPage
      pageTitle={'Search Demos'}
      description={
        <div>
          <h4>Search Functions</h4>
          <p>
            There are a number of different ways to search for data in
            Adaptable:
          </p>
          <ul>{demoLinks}</ul>
          Click on the buttons below to see a demo for each search function.
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
