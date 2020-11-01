import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridfeatures/aggridmasterdetaildemo')}
      pageTitle={'Master Detail Demo'}
      description={
        <div>
          <p>
            AdapTable supports Master / Details grid functionality - via the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/plugins/master-detail/master-detail-plugin"
              target="_blank"
            >
              Master / Detail Plugin
            </a>
            .
          </p>
          <p>
            Essentially 2 grids are defined each with their own Predefined
            Config: <b>Master</b> - the 'main' Grid with collapsed rows; and{' '}
            <b>Detail</b> which is shared by each child grid instance.{' '}
          </p>
          <p>
            Note: this Function is only available if master/detail functionality
            is offered by the underlying vendor grid (which is the case with
            ag-Grid that this demo uses)
          </p>
          <p>
            Click on a team in the Master to see the child grid showing players
            for that team: note that each instance shares the Conditional Style
            showing players over 30.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/using-aggrid"
            target="_blank"
          >
            ag-Grid Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/plugins/master-detail/master-detail-plugin"
            target="_blank"
          >
            Master / Detail Plugin
          </a>{' '}
        </div>
      }
    />
  );
};
