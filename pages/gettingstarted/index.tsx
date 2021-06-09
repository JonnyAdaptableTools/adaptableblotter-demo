import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Getting Started'
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
      pageTitle={'Getting Started demos'}
      description={
        <div>
          <h4>Getting Started Demos</h4>
          <p>
            The demos in this section are designed to introduce you to basic
            concepts in AdapTable and to get up and running quickly.{' '}
          </p>
          <p>
            Its just a few lines of code to set up an instance of AdapTable and
            get immediate access to a huge range of features that would
            otherwise take many months to build.{' '}
          </p>
          <p>
            The <b>basic set up demo</b> shows how to set up AdapTable using
            dummy data in a series of small steps.
          </p>
          <p>
            Typically you will ship your AdapTable instance with Predefined
            Configuration so that your users open their application at first use
            and see it pre-loaded with Searches, Styles, Edit Rules, Reports etc
            that match their needs.{' '}
          </p>
          <p>
            Additionally you will add Adaptable Options which will include
            'Entitlements' - stipulating which AdapTable Modules they are
            allowed to access.
          </p>
          <p>
            However we have added a <b>No Config Demo</b> with NO Predefined
            Configuration to show how AdapTable looks straight out of the box
            with all the defaults chosen.
          </p>
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
