import React from 'react';
import NextLink from 'next/link';

import { withRouter } from 'next/router';

import Category from './Category';

import './index.scss';
import Logo from './Logo';

if (global.console) {
  const log = global.console.log;
  global.console.log = (...args: any[]) => {
    if ((global as any).ConsoleLog) {
      (global as any).ConsoleLog(...args);
    }
    return log(...args);
  };
}

const Link = withRouter(
  ({
    router,
    href,
    children,
  }: {
    router: any;
    href: string;
    children: any;
  }) => {
    const active = router.pathname === href;
    if (active) {
      children = React.cloneElement(children, {
        className: 'active-link',
        active: true,
      });
    }

    return <NextLink href={href}>{children}</NextLink>;
  }
);

export default () => {
  return (
    <div
      className="sidebar"
      style={{
        display: 'flex',
        flexFlow: 'column',
      }}
    >
      <Logo />
      <div className="sidebar-container" style={{ flex: 1, overflow: 'auto' }}>
        <h3 style={{ color: 'white', fontWeight: 200, marginTop: 5 }}>Demos</h3>
        <div
          style={{
            padding: '10px 20px',
            display: 'inline-flex',
            justifyContent: 'center',
            flexFlow: 'row',
          }}
        >
          <button
            title="Clear all state from all demos to return to original predefined config"
            style={{
              padding: '2px 4px',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
            onClick={() => {
              localStorage.clear();
              window.location.href = window.location.href;
            }}
          >
            Clear state
          </button>
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Category
          title={
            <Link href="/config">
              <a>Predefined Config</a>
            </Link>
          }
        >
          <Link href="/config/aggridnoconfigdemo">
            <a>No Config</a>
          </Link>
          <Link href="/config/aggridpredefinedconfigdemo">
            <a>With Config</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/search">
              <a>Search</a>
            </Link>
          }
        >
          <Link href="/search/aggridquicksearchdemo">
            <a>Quick Search</a>
          </Link>
          <Link href="/search/aggridadvancedsearchdemo">
            <a>Advanced Search</a>
          </Link>
          <Link href="/search/aggridquickfilterdemo">
            <a>Quick Filter Bar</a>
          </Link>{' '}
          <Link href="/search/aggridcolumnfiltersdemo">
            <a>Column Filters</a>
          </Link>
          <Link href="/search/aggriduserfiltersdemo">
            <a>User Filters</a>
          </Link>
          <Link href="/search/aggridnamedfiltersdemo">
            <a>Named Filters</a>
          </Link>
          <Link href="/search/aggriddatasourcedemo">
            <a>Data Source Selector</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/edit">
              <a>Edit</a>
            </Link>
          }
        >
          <Link href="/edit/aggridsmarteditdemo">
            <a>Smart Edit</a>
          </Link>
          <Link href="/edit/aggridbulkupdatedemo">
            <a>Bulk Update</a>
          </Link>
          <Link href="/edit/aggridshortcutdemo">
            <a>Shortcut</a>
          </Link>
          <Link href="/edit/aggridplusminusdemo">
            <a>Plus Minus</a>
          </Link>
          <Link href="/edit/aggridcellvalidationdemo">
            <a>Cell Validation</a>
          </Link>
          <Link href="/edit/aggrideditdropdownsdemo">
            <a>Edit Dropdowns</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/style">
              <a>Styling</a>
            </Link>
          }
        >
          <Link href="/style/aggridconditionalstyledemo">
            <a>Conditional Style</a>
          </Link>
          <Link href="/style/aggridformatcolumndemo">
            <a>Format Column</a>
          </Link>
          <Link href="/style/aggridflashingcelldemo">
            <a>Flashing Cell</a>
          </Link>
          <Link href="/style/aggridupdatedrowsdemo">
            <a>Updated Rows</a>
          </Link>
          <Link href="/style/aggridpercentbardemo">
            <a>Percent Bar</a>
          </Link>
          <Link href="/style/aggridrowstyledemo">
            <a>Row Styles</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/theme">
              <a>Theming</a>
            </Link>
          }
        >
          <Link href="/theme/aggriddarkthemedemo">
            <a>Dark Theme</a>
          </Link>
          <Link href="/theme/aggridcustomthemedemo">
            <a>Custom Theme</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/column">
              <a>Columns</a>
            </Link>
          }
        >
          <Link href="/column/aggridcalculatedcolumndemo">
            <a>Calculated Column</a>
          </Link>
          <Link href="/column/aggridfreetextcolumndemo">
            <a>Free Text Column</a>
          </Link>
          <Link href="/column/aggridcolumncategorydemo">
            <a>Column Category</a>
          </Link>
          <Link href="/column/aggridcolumninfodemo">
            <a>Column Info</a>
          </Link>
          <Link href="/column/aggridactioncolumnsdemo">
            <a>Action Column</a>
          </Link>
          <Link href="/column/aggridsparklinecolumnsdemo">
            <a>Sparkline Column</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/charts">
              <a>Charts</a>
            </Link>
          }
        >
          <Link href="/charts/aggridcategorychartsdemo">
            <a>Category Charts</a>
          </Link>
          <Link href="/charts/aggridpiechartsdemo">
            <a>Pie Charts</a>
          </Link>
          <Link href="/charts/aggridpiechartscolumndemo">
            <a>Pie Charts (Column)</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/gridmanagement">
              <a>Grid Management</a>
            </Link>
          }
        >
          <Link href="/gridmanagement/aggridcustomsortdemo">
            <a>Custom Sort</a>
          </Link>
          <Link href="/gridmanagement/aggridexportdemo">
            <a>Export</a>
          </Link>
          <Link href="/gridmanagement/aggridlayoutdemo">
            <a>Layout</a>
          </Link>
          <Link href="/gridmanagement/aggridcellsummarydemo">
            <a>Cell Summary</a>
          </Link>
          <Link href="/gridmanagement/aggridgridinfodemo">
            <a>Grid Info</a>
          </Link>
          <Link href="/gridmanagement/aggridcalendardemo">
            <a>Calendar</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/alertsmessages">
              <a>Alerts and Messages</a>
            </Link>
          }
        >
          <Link href="/alertsmessages/aggridalertdemo">
            <a>Alert</a>
          </Link>
          <Link href="/alertsmessages/aggridreminderdemo">
            <a>Reminder</a>
          </Link>
          <Link href="/alertsmessages/aggridsystemstatusdemo">
            <a>System Status</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          }
        >
          <Link href="/dashboard/aggriddashboardtoolbarsdemo">
            <a>Toolbars</a>
          </Link>
          <Link href="/dashboard/aggriddashboardbuttonsdemo">
            <a>Buttons</a>
          </Link>
          <Link href="/dashboard/aggriddashboardvisibilitydemo">
            <a>Visibility</a>
          </Link>
          <Link href="/dashboard/aggriddashboardapplicationtoolbardemo">
            <a>Application Toolbar</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/partners">
              <a>Partners</a>
            </Link>
          }
        >
          <Link href="/partners/finsembledemo">
            <a>Finsemble</a>
          </Link>
          <Link href="/partners/openfindemo">
            <a>OpenFin</a>
          </Link>
          <Link href="/partners/ipushpulldemo">
            <a>iPushPull</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          }
        >
          <Link href="/admin/aggridentitlementsdemo">
            <a>Entitlements</a>
          </Link>
          <Link href="/admin/aggridauditdemo">
            <a>Audit Log</a>
          </Link>
          <Link href="/admin/aggridblotterapidemo">
            <a>Blotter API</a>
          </Link>
          <Link href="/admin/aggridbigdatademo">
            <a>Big Data</a>
          </Link>
          <Link href="/admin/aggriddatasourcechangesdemo">
            <a>DataSource Changes</a>
          </Link>

          {/* 
          <Link href="/admin/aggridnocodedemo">
            <a>No Code</a>
          </Link>
        <Link href="/admin/aggridbestexdemo">
            <a>Best Ex</a>
          </Link>
          */}
        </Category>
        <Category
          title={
            <Link href="/aggridfeatures">
              <a>agGrid Features</a>
            </Link>
          }
        >
          <Link href="/aggridfeatures/aggridrowgroupingdemo">
            <a>Row Grouping</a>
          </Link>
          <Link href="/aggridfeatures/aggridcolumngroupingdemo">
            <a>Column Grouping</a>
          </Link>
          <Link href="/aggridfeatures/aggridpivotingdemo">
            <a>Pivoting</a>
          </Link>
          <Link href="/aggridfeatures/aggridmasterdetaildemo">
            <a>Master Detail</a>
          </Link>
          <Link href="/aggridfeatures/aggridrowselectiondemo">
            <a>Row Selection</a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/blotteroptions">
              <a>Blotter Options</a>
            </Link>
          }
        >
          <Link href="/blotteroptions/aggridignorecasequeriesdemo">
            <a>Ignore Case In Queries </a>
          </Link>
          <Link href="/blotteroptions/aggridvendorgridfiltersdemo">
            <a>Vendor Grid Filters </a>
          </Link>
          <Link href="/blotteroptions/aggridautoapplyfiltersdemo">
            <a>Auto Apply Filters </a>
          </Link>
        </Category>
        <Category
          title={
            <Link href="/lookups">
              <a>Column Lookups</a>
            </Link>
          }
        >
          <Link href="/lookups/aggridmaxitemsqueriesdemo">
            <a>Max Items Displayed</a>
          </Link>{' '}
          <Link href="/lookups/aggridserverlookupsdemo">
            <a>Server Lookups</a>
          </Link>
          <Link href="/lookups/aggridpermittedvaluesdemo">
            <a>Permitted Values</a>
          </Link>
        </Category>{' '}
        {/* 
         <Category
          title={
            <Link href="/userinterfacestate">
              <a>User Interface State</a>
            </Link>
          }
        >
          <Link href="/userinterfacestate/aggridcolorpalettedemo">
            <a>Color Palette</a>
          </Link>
        </Category>
       
        <Category
          title={
            <Link href="/examples">
              <a>Examples</a>
            </Link>
          }
        >
          <Link href="/examples/bondpricerdemo">
            <a>Bond Pricer Demo</a>
          </Link>
         
          
        </Category>
         */}
      </div>
    </div>
  );
};
