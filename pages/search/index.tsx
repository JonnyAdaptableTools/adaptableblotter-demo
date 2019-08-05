import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import logo from '../../images/AdaptableBlotter.png';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

const DemoBox = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <img src={logo} style={{ maxWidth: '80%' }} />
          <div>{children}</div>
        </div>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <MainPage
      pageTitle={'Search demos'}
      description={
        <div>
          <h4>Search Functions</h4>
          <p>
            There are a number of different ways to search for data in the
            Adaptable Blotter:
          </p>
          <ul>
            <li>
              <b>Quick Search:</b> Finds (and highlights) all cells that match
              inputted text across all visible columns in the grid.
            </li>
            <li>
              <b>Advanced Search:</b> Runs a multi-column query (using
              potentially a huge range of indicators) to filer the grid to
              precise requirements.
            </li>
            <li>
              <b>Quick Filter:</b> The area under the Column Header is called
              the Quick Filter, which is a shortcut to the Column Filter.
            </li>{' '}
            <li>
              <b>Column Filters:</b> Create saveable column filters to restrict
              which cells are shown for a column.
            </li>
            <li>
              <b>User Filters:</b> Column filters that can be named and saved
              and then re-used in queries in other functions.
            </li>
            <li>
              <b>Named Filters:</b> Filters that you provide at design time
              which evaluate according to a predicate that you provide - used
              when you have very complicated filters.
            </li>
            <li>
              <b>Data Source Selector:</b> Dropdown populated through Config
              that lists items that can be used as part of Server Search.
            </li>
          </ul>
          Click on the buttons below to see a demo for each search function.
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/search/aggridquicksearchdemo">
          Quick Search demo
        </DemoBox>
        <DemoBox href="/search/aggridadvancedsearchdemo">
          Advanced Search demo
        </DemoBox>
        <DemoBox href="/search/aggridcolumnfiltersdemo">
          Column Filters demo
        </DemoBox>
        <DemoBox href="/search/aggriduserfiltersdemo">
          User Filters demo
        </DemoBox>
        <DemoBox href="/search/aggridquickfilterdemo">
          Quick Filter demo
        </DemoBox>
        <DemoBox href="/search/aggriddatasourcedemo">
          Data Source Selector demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
