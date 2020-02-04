import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

import DemoBox from '../../src/components/DemoBox';

export default () => {
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
          <b>Set up</b>{' '}
          <p>
            Its just a few lines of code to set up an instance of AdapTable and
            get immediate access to a huge range of features that would
            otherwise take many months to build.{' '}
          </p>
          <p>
            The basic set up demo shows how to set up AdapTable using dummy data
            in a series of small steps.
          </p>
          <b>Predefined Config</b>{' '}
          <p>
            Typically you will ship your AdapTable instance with Predefined
            Configuration so that your users open their application at first use
            and see it pre-loaded with Searches, Styles, Edit Rules, Reports etc
            that match their needs.
          </p>
          <p>
            Additionally Predefined Configuration will include 'Entitlements' -
            stipulating which AdapTable functions they are allowed to access.
          </p>
          <p>This section contains 2 relevant examples: </p>
          <ul>
            <li>
              One is loaded with NO Predfined Configuration so it shows how
              AdapTable looks straight out of the box with all the defaults
              chosen.
            </li>
            <li>
              One containing an AdapTable instance which does have Predefined
              Configuration so its pre-loaded with styles, reports, layouts etc.
            </li>
          </ul>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/gettingstarted/aggridbasicsetupdemo">
          Basic Set Up demo
        </DemoBox>
        <DemoBox href="/gettingstarted/aggridnoconfigdemo">
          No Predefined Config demo
        </DemoBox>
        <DemoBox href="/gettingstarted/aggridpredefinedconfigdemo">
          Predefined Config demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
