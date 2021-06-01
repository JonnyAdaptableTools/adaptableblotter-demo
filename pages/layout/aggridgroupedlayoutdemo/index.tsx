import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/layout/aggridgroupedlayoutdemo')}
      pageTitle={'Grouped Layout Demo'}
      description={
        <div>
          <p>
            AdapTable makes it easy to include grouped row information in
            Layouts; this is done via the <i>RowGroupedColumns</i> property that
            specifies which Column(s) should be grouped.
          </p>
          <p>
            Grouped columns can be included in Layouts either at Design-Time
            through Predefined Config or at Run-Time via the Layout Wizard.
          </p>
          <p>
            The Layout will also store the correct <b>sorting</b> for the
            Grouped Column (either the default sort or a Custom Sort - see{' '}
            <a href="../aggridfeatures/aggridrowgroupingdemo">Grouping Demo</a>{' '}
            for more details)
          </p>
          <p>
            Note: if you want the Layout to include details of which grouped
            rows are open, set the <b>includeExpandedRowGroups</b> property to
            true in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
              target="_blank"
            >
              Layout Options
            </a>
            .
          </p>
          <p>
            This is what we have done in this demo - we set the Layout to open
            at 'Janet Leverling / United Package'
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/layout-module"
            target="_blank"
          >
            Layout Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/layout-config"
            target="_blank"
          >
            Layout Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
            target="_blank"
          >
            Layout Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/layout-api"
            target="_blank"
          >
            Layout Api
          </a>{' '}
        </div>
      }
    />
  );
};
