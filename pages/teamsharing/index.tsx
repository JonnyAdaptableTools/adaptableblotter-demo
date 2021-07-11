import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Team Sharing'
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
      pageTitle={'Team Sharing demos'}
      description={
        <div>
          <h4>Team Sharing</h4>
          <p>
            Team Sharing allows users to share - at run-time - Adaptable Objects
            between colleagues.{' '}
          </p>
          <p>
            It is designed for use cases where the same, newly-created Adaptable
            Object (e.g. a Layout, Conditional Style, Report etc.) will be
            required by multiple users.{' '}
          </p>
          <p>
            Each shared object can be either a Snapshot (i.e. a one-off
            operation) or Active (all instances stay linked).{' '}
          </p>
          <ul>{demoLinks}</ul>
          Click on the buttons below to see a demo for some of the different
          Team Sharing options available
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
