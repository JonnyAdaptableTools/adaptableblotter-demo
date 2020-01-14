import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import logo from '../../images/Adaptable.png';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

const DemoBox = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <img src={logo} style={{ maxWidth: '80%', marginBottom: '5%' }} />
          <div>{children}</div>
        </div>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <MainPage
      pageTitle={'Lookup demos'}
      description={
        <div>
          <h4>Column Values Lookup Demos</h4>
          <p>
            There are a few places in AdapTable when a list of distinct column
            values is displayed.
          </p>
          <p>
            For instance when using a Column Filter, or in the Column Values
            section of the Query Builder, or in the Bulk Update function.
          </p>
          <p>
            By default when showing list of available column values, AdapTable
            will show the first 2,000 distinct values, but you can amend this by
            setting the <b>maxColumnValueItemsDisplayed</b> property in Query
            Options section of Adaptable Options. <br />
            Any values that exceed the count will be ignored. See the{' '}
            <b>Max Items Displayed Demo</b>.
          </p>
          <p>
            There is a hierarchy for how AdapTable will retrieve this options as
            follows: (Note: in all 3 options, AdapTable will not show more
            values than that set in the maxColumnValueItemsDisplayed property)
          </p>
          <ol>
            <li>
              <b>Server Lookups:</b> You can provide AdapTable dynamically
              (through client-server communication) with the list of values that
              can be displayed each time a list of distinct cell values is
              required. <br />
              You set this through the <b>getColumnValues</b> property in Query
              Options section of Adaptable Options. See the Server Lookups demo
              for more information.
            </li>
            <li>
              <b>Permitted Column Values:</b> You can provide AdapTable at
              startup with a list of column names and a list of values which
              should be displayed when getting distinct values for that column.
              <br />
              You do this through UserInterface state section of Predefined
              Config. See the Permitted Values demo for more information.
            </li>
            <li>
              <b>Dynamic Values:</b> If no Server Lookups or Permitted Column
              Values have been set for that column, AdapTable will dynamically
              retrieve all the distinct values for that column.
              <br />
            </li>
          </ol>
          Click on the buttons below to see a demo.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/lookups/aggridmaxitemsqueriesdemo">
          Max Items Displayed demo
        </DemoBox>
        <DemoBox href="/lookups/aggridserverlookupsdemo">
          Server Lookups demo
        </DemoBox>
        <DemoBox href="/lookups/aggridpermittedvaluesdemo">
          Permitted Values demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
