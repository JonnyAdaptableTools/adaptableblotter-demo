import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Admin'
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
      pageTitle={'Admin demos'}
      description={
        <div>
          <h4>Administrative Demos</h4>
          <p>
            Administrators are able to set up the Grid exactly how they like,
            permission users, and have full visibility over all that goes on in
            AdapTable.
          </p>
          <ul>{demoLinks}</ul>
          Click on the buttons below to see a demo for each administrative task.
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
