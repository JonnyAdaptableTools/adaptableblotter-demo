import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
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
    c => c.CategoryName == 'Tool Panel'
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
        <div style={{ fontSize: 'larger' }}>{title}</div>
      </DemoBox>
    );
  });
  return (
    <MainPage
      pageTitle={'Tool Panel demos'}
      description={
        <div>
          <h4>Tool Panel</h4>
          <p>See the examples in this section to find out more.</p>
          <ul>{demoLinks}</ul>
        </div>
      }
    >
      <GridLayout>{demoBoxes}</GridLayout>
    </MainPage>
  );
};