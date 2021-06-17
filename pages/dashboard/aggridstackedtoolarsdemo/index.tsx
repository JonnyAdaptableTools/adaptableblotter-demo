import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggridstackedtoolarsdemo')}
      pageTitle={'Stacked Toolbars Demo'}
      documentClassName="custom-css-rules"
      description={
        <div>
          <p>
            The default behaviour when the Toolbars are wider than the Grid or
            containing window is for a horizontal scrollbar to appear.
          </p>
          <p>However this can be changed by setting a CSS Variable.</p>
          <p>
            The default value for the <b>--ab-dashboard-wrap</b> property is{' '}
            <i>nowrap</i>.
          </p>
          <p>
            But setting this to <i>wrap</i> - as we have done in this demo - has
            the effect of wrapping the Toolbars.{' '}
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/user-interface/dashboard"
            target="_blank"
          >
            Dashboard Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/theming-and-styling"
            target="_blank"
          >
            Theming and Styling
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/dashboard-api"
            target="_blank"
          >
            Dashboard Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/dashboard-options"
            target="_blank"
          >
            Dashboard Options
          </a>{' '}
        </div>
      }
    />
  );
};
