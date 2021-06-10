import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';
import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Column Lookups'
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
      pageTitle={'Lookup demos'}
      description={
        <div>
          <h4>Column Values Lookup Demos</h4>
          <p>
            There are a few places in AdapTable when a list of distinct column
            values is displayed.
          </p>
          <p>
            These demos show some of the options that are available - both at
            design-time and run-time.
          </p>
          Click on the buttons below to see a demo.
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
