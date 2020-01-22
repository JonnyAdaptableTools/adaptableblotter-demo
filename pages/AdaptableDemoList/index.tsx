import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import {
  DemoPage,
  DemoCategory,
  getDemoPageStructure,
} from '../../DemoList/demolist';

const DemoBox = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="demo-box">
      <div style={{ marginLeft: '5px' }}>
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
  let demoPages: DemoPage[] = [];
  getDemoPageStructure().Categories.forEach(c => {
    demoPages.push(...c.Pages);
  });

  let alphabeticalContent = demoPages
    .sort((a, b) => (a.Name > b.Name ? 1 : -1))
    .map((page: DemoPage) => {
      return (
        <DemoBoxChild href={page.Link} description={page.Description}>
          {page.Name}
        </DemoBoxChild>
      );
    });

  let pageStructureContent = getDemoPageStructure().Categories.map(
    (category: DemoCategory) => {
      let demoPages = category.Pages.map((page: DemoPage) => {
        return (
          <DemoBoxChild href={page.Link} description={page.Description}>
            {page.Name}
          </DemoBoxChild>
        );
      });
      return <DemoBox title={category.CategoryName}>{demoPages}</DemoBox>;
    }
  );

  const [alphaOrder, setAlphaOrder] = React.useState(true);

  const onRadioChange = (event: any) => {
    setAlphaOrder(event.target.value == 'yes');
  };

  const labelStyle = {
    padding: 5,
  };
  const inputStyle = { marginLeft: 1 };
  return (
    <MainPage
      pageTitle={'Alphabetical list'}
      description={
        <div>
          <h4>AdapTable Demos</h4>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row',
            }}
          >
            <label style={labelStyle}>
              <input
                style={inputStyle}
                type="radio"
                name="order"
                value={'yes'}
                checked={alphaOrder}
                onChange={onRadioChange}
              />{' '}
              Show in alphabetical order
            </label>
            <label style={labelStyle}>
              <input
                style={inputStyle}
                type="radio"
                name="order"
                value={'no'}
                checked={!alphaOrder}
                onChange={onRadioChange}
              />{' '}
              Show by Category
            </label>
          </div>
        </div>
      }
    >
      <div>{alphaOrder ? alphabeticalContent : pageStructureContent}</div>
    </MainPage>
  );
};
