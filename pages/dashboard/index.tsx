import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Dashboard'
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
      pageTitle={'Dashboard demos'}
      description={
        <div>
          <h4>Dashboard</h4>
          <p>
            The Dashboard is the area above the grid which contains Tabs (with
            Toolbars), Module Buttons and the Quick Search textbox.
          </p>
          <p>
            It has 3 visibility modes - 'Full', 'Collapsed' and 'Floating' to
            suit different screen estate requirements.
          </p>
          <p>
            You are able to use{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config"
              target="_blank"
            >
              Dashboard Config
            </a>{' '}
            and{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/dashboard-options"
              target="_blank"
            >
              Dashboard Options
            </a>{' '}
            to customise the Dashboard to fit your requirements, ie. create your
            own toolbars, select the buttons to show etc.
          </p>
          <p>
            You can also create Custom Toolbars for you to render with your own
            content and to put them in any Tabs that you want.
          </p>
          <p>See the examples below to find out more about the Dashboard:</p>
          <ul>{demoLinks}</ul>
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
