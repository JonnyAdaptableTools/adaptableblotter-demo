import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'GridGurus'
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
      pageTitle={'GridGurus'}
      description={
        <div>
          <h4>Grid Gurus</h4>
          <p>
            In developing AdapTable, the Adaptable Tools Development Team
            learned everything there is to know (and more!) about all the
            DataGrids that we support, including the hugely popular ag-Grid.
          </p>
          <p>
            We researched multiple set up and configuration options, the
            different ways to get data into the grid, the various display modes,
            when and whether to use server or client, when to group, aggregate
            or pivot, how best to update data and much more.
          </p>
          <p>
            Through the AdapTable Tools{' '}
            <b>
              <i>Grid Gurus' Service</i>
            </b>{' '}
            you can deploy that unrivalled knowledge alongside your own team to
            help shape DataGrid projects and ensure that they meet your
            requirements as cost and time-effectively as possible. Adaptable
            Tools’ Grid Gurus can work on-site or off-site to set up your Grid
            in a bespoke fashion so that it has optimal alignment to your use
            cases.
          </p>
          <p>
            This is particularly important at the start of the project when
            making the right architectural and design decisions can save money,
            time and support heartache down the line...
          </p>
          <ul>{demoLinks}</ul>
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
