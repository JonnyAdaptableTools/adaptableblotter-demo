import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

const DemoBox = ({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href}>
      <a>
        {' '}
        <div className="demo-box" style={{ height: '185px', width: '185px' }}>
          <h4>{title}</h4>
          {children}
        </div>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <MainPage
      pageTitle={'Column demos'}
      description={
        <div>
          <h4>Column Functions</h4>
          <p>
            There are a number of different column-related functions in the
            Adaptable Blotter, to cater for a wide variety of use cases:
          </p>
          <p>
            Click on the buttons below to see a demo for each column-related
            function.
          </p>
        </div>
      }
    >
      <GridLayout>
        <DemoBox
          href="/column/aggridcalculatedcolumndemo"
          title="Calculated Column Demo"
        >
          <p>
            Create your own custom columns where the value is derived based on
            other columns in the Grid.
          </p>
          <p>Use an Expression so that the value is evaluated dynamically.</p>
        </DemoBox>
        <DemoBox
          href="/column/aggridfreetextcolumndemo"
          title="Free Text Column Demo"
        >
          <p>
            Create your own column where you can insert your own values (e.g.
            comments) that are stored separately from the Data Source.
          </p>
        </DemoBox>
        <DemoBox
          href="/column/aggridcolumncategorydemo"
          title=" Column Category Demo"
        >
          <p>
            Group columns together logically to help you to manipulate grids
            with very large numbers of columns.
          </p>
        </DemoBox>
        <DemoBox href="/column/aggridcolumninfodemo" title="Column Info Demo">
          <p>
            Find out all the objects associated with a column with a single
            lookup.
          </p>
        </DemoBox>
        <DemoBox
          href="/column/aggridactioncolumnsdemo"
          title="Action Column Demo"
        >
          <p>
            Specify a column with a button (that you can render) and listen to
            the clicked event to perform any logic you reqiure.
          </p>
        </DemoBox>
        <DemoBox
          href="/column/aggridsparklinecolumnsdemo"
          title="Sparkline Column Demo"
        >
          <p>
            Visualise columns that contain a range / array of numeric cells by
            using a Sparkline.
          </p>
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
