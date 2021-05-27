import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Format Column'
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
          <h4>Format Column</h4>
          <p>
            The Format Column Module allows you to style an entire column.
            Unlike Conditional Styles, the Format Column style is <b>always</b>{' '}
            applied, irrespective of the data in the cell.{' '}
          </p>
          <p>
            Format Columns use <b>Scope</b> meaning you can choose to apply a
            Format to one, some or all columns, or to columns of a particular
            DataType.
          </p>
          <p>
            You can provide either a visual Style, a Display Format (or both).
          </p>
          <ul>{demoLinks}</ul>
          Click on the buttons below to see a demo for different elements of the
          Format Column Module.
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
