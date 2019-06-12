import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggriddashboardbuttonsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Dashboard Buttons Demo'}
      description={
        <div>
          <h4>Dashboard Buttons Demo</h4>
          <p>
            As part of Dashboard Predefined Config you can specify which buttons
            and dropdowns are visible in the 'Home' toolbar (the one on the
            left).
          </p>
          <p>
            In this example we have set the 'Dashboard', 'ColumnChooser',
            'Chart', 'SmartEdit', 'Alert' and 'Reminder' buttons to be visible
            and chosen to hide the <i>About</i> and <i>System Status</i>{' '}
            buttons.
          </p>
          <p>
            Plus we have set <i>Use Single Colour for All Dashboard Buttons</i>{' '}
            property to false so that we see the more colourful set of toolbars,
            and we have opted to hide the <i>Columns</i> and <i>Toolbars</i>{' '}
            dropdowns.
          </p>
        </div>
      }
    />
  );
};
