import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardtitledemo')}
      pageTitle={'Dashboard Title Demo'}
      description={
        <div>
          <p>
            By default, AdapTable sets the title in the Dashboard Header to the
            value of the 'adaptableId' property in <i>Adaptable Options</i>.
          </p>
          <p>
            However you can change this via the <i>HomeToolbarTitle</i> property
            in Dashboard Predefined Config
          </p>
          <p>
            In this example we have set the name of the Toolbar to 'New
            Dashboard Header Name' (though we have <b>not</b> changed the
            adaptableId property itself).
          </p>
        </div>
      }
    />
  );
};
