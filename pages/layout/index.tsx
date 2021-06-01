import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Layout'
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
      pageTitle={'Layout demos'}
      description={
        <div>
          <h4>Layouts (Views)</h4>
          <p>
            Layouts allow you to specify <b>Column visiblity and Order</b>.
          </p>{' '}
          <p>
            Layouts can also include column widths, pinning, sorting, grouping,
            aggregating and pivoting information.{' '}
          </p>
          <p>
            Layouts will, by default, save automatially when changed and there
            must always be one 'active' layout.
          </p>
          <p>
            The search and filter related Modules determine <b>row</b>{' '}
            visibility and order, while layouts manage <b>column</b> visibility
            and order.
          </p>
          <ul>{demoLinks}</ul>
          Click on the buttons below to see a demo for some of the different
          Layout options available
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
