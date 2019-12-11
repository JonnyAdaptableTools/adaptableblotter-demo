import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/theme/aggridcustomicondemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Custom Icon Demo'}
      className="custom-icon-demo"
      description={
        <>
          <h4>Custom Icon Demo</h4>
          <p>
            It is straightforward to change one of the icons provided by the
            Adaptable Blotter with your own icon. Simply override the relevant
            icon in your css with your preferred image.
          </p>
          <p>
            In this example we have supplied our own icons for the <b>Export</b>
            and <b>Alert</b> functions. We overrode the <i>.ab-Icon--export</i>{' '}
            and <i>.ab-Icon--alert </i> properties in our css with the new
            images. (See{' '}
            <a
              href="https://github.com/AdaptableTools/adaptableblotter-demo/blob/master/src/client/theme/aggridcustomicondemo/index.css"
              target="_blank"
            >
              source code
            </a>{' '}
            here).
          </p>
          <p>
            We downloaded the new icons from the same{' '}
            <a href="https://material.io/resources/icons/" target="_blank">
              Material Icons
            </a>{' '}
            site used for the shipped icons, but they can come from anywhere you
            specify.
          </p>
          <p>
            Note that the new icon appears not only in the toolbar but also in
            the functions menu dropdown and anywhere else where the icon is
            referenced.
          </p>

          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755177-Styling-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </>
      }
    />
  );
};
