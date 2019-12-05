import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import './index.scss';

const DemoBox = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="demo-box">
      <div>
        <h3>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

const DemoBoxChild = ({
  href,
  description,
  children,
}: {
  href: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <div className="demo-box-child">
      <Link href={href}>
        <a>
          <span>{children}</span>
        </a>
      </Link>
      {': '}
      {description}
    </div>
  );
};

export default () => {
  return (
    <MainPage
      pageTitle={'Alphabetical list'}
      description={
        <div>
          <h4>Demo List</h4>
        </div>
      }
    >
      <div>
        <DemoBox title="Predefined Config">
          <DemoBoxChild
            href="/config/aggridnoconfigdemo"
            description="An Adaptable Blotter with no Predefined Config supplied"
          >
            No Config
          </DemoBoxChild>
          <DemoBoxChild
            href="/config/aggridpredefinedconfigdemo"
            description="An Adaptable Blotter with lots of different Predefined Config elements supplied"
          >
            Predefined Config
          </DemoBoxChild>
        </DemoBox>

        <DemoBox title="Search">
          <DemoBoxChild
            href="/search/aggridquicksearchdemo"
            description="Search across all columns using a simple text search (includes wildcards like '>')."
          >
            Quick Search
          </DemoBoxChild>
          <DemoBoxChild
            href="/search/aggridadvancedsearchdemo"
            description="Saveable multiple-column search facility including a huge array of ranges and search criteria."
          >
            Advanced Search
          </DemoBoxChild>
          <DemoBoxChild
            href="/config/aggridquickfilterdemo"
            description="Search quickly across a column for "
          >
            Quick Filter Bar
          </DemoBoxChild>
        </DemoBox>
      </div>
    </MainPage>
  );
};
