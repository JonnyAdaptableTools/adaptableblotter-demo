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
          <p>
            However this can be changed by setting the{' '}
            <b>--ab-dashboard-wrap</b> CSS Variable.
          </p>
          <p>
            We set this to: <code> --ab-dashboard-wrap: wrap;</code> (the
            default is <i>nowrap</i>) which has the effect of wrapping the
            Toolbars.{' '}
          </p>
          <p>
            Note: We have also set another CSS variable to widen the space
            between toolbars as follows:{' '}
            <code> --ab-dashboard-gap-size: 5px;</code>
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
            href="https://docs.adaptabletools.com/docs/theming/theming-overview"
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
