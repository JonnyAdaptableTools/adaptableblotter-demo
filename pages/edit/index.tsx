import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Editing'
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
      pageTitle={'Edit demos'}
      description={
        <div>
          <h4>Edit Functions</h4>
          <p>There are a number of different ways to edit data in AdapTable:</p>
          <ul>{demoLinks}</ul>
          Click on the buttons below to see a demo for each edit function.
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
