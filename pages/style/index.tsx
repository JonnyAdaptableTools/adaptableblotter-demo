import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Styling'
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
      pageTitle={'Style demos'}
      description={
        <div>
          <h4>Styling Functions</h4>
          <p>
            There are a number of different ways to style cells, columns, rows
            and the Grid itself.
          </p>
          <ul>{demoLinks}</ul>
          Click on the buttons below to see a demo for each styling function.
          <br />
          If you want to theme the actual AdapTable instance itself (e.g. change
          the colours and look and feel, please refer to the{' '}
          <a href="./theme" target="_self">
            Theming
          </a>{' '}
          demos).
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
