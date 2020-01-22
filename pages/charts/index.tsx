import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.css';
import GridLayout from '../../src/components/GridLayout';
import { getDemoPageStructure, DemoPage } from '../../DemoList/demolist';

const DemoBox = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <img
            src={'/images/Adaptable.png'}
            style={{ maxWidth: '80%', marginBottom: '5%' }}
          />
          <div>{children}</div>
        </div>
      </a>
    </Link>
  );
};

export default () => {
  let categoryPages = getDemoPageStructure().Categories.find(
    c => c.CategoryName == 'Charts'
  )!.Pages;

  // let demoLinks: any = categoryPages.map((page: DemoPage) => {
  //   return (
  //     <li>
  //       <b>{page.Name}: </b> {page.Description}
  //     </li>
  //   );
  // });

  let demoBoxes: any = categoryPages.map((page: DemoPage) => {
    let title = page.Name + ' Demo';
    return (
      <DemoBox key={page.Name} href={page.Link}>
        <div style={{ fontSize: 'larger' }}>{title}</div>
      </DemoBox>
    );
  });

  return (
    <MainPage
      pageTitle={'Chart demos'}
      description={
        <div>
          <h4>Charts</h4>
          <p>
            AdapTable contains powerful charting capabilities (courtesy of our
            partner{' '}
            <a
              href="https://www.infragistics.com/products/ignite-ui-react"
              target="_blank"
            >
              Infragistics
            </a>
            ).
          </p>
          <p>
            {' '}
            To run charts you need to install the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_adaptableoptions_adaptableoptions_.adaptableoptions.html#plugins"
              target="_blank"
            >
              Charts plugin
            </a>{' '}
            in your 'package.json' and then add it to the 'plugins' section of{' '}
            <i>AdaptableOptions</i>.
          </p>
          <p>
            These examples show the Category, Sparkline and Pie (Doughnut)
            charts but other types are coming soon.
          </p>
          <p>
            All charts are 'live', so that they update in line with changes to
            the underlying data, and they are based on visible (not all) rows so
            will update as you filter the Grid.
          </p>
          <p>
            You can also access Pie Charts and Sparklines through the Column
            Header menu which will show you a Pie Chart or Sparkline
            respectively for all visible values in that column (with summary
            rounding where applicable).
          </p>
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};
