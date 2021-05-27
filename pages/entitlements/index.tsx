import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Entitlements'
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
      pageTitle={'Entitlement demos'}
      description={
        <div>
          <h4>Entitlement Demos</h4>
          <p>
            Adaptable Options includes an 'entitlementOptions' property enabling
            you to set Entitlments (also known as Permissions) for your
            AdapTable Modules and objects.
          </p>
          <p>
            For each AdapTable <i>Module</i> you can set the Entitlement to be:
            <ul>
              <li>
                <i>Full</i> - this is the Default (though the default can be
                changed)
              </li>
              <li>
                <i>ReadOnly</i> - you can access existing objects (provided in
                Predefined Config), but not create/edit/ delete them
              </li>
              <li>
                <i>Hidden</i> - (function is entirely absent)
              </li>
            </ul>
            We provide the following demos that each illustrate different
            elements of how Entitlements work:
          </p>
          <ul>{demoLinks}</ul>
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
