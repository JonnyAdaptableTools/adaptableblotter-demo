import React from 'react';

import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/partners/aggridipushpulldemo')}
      pageTitle={'ipushpull / AdapTable Demo'}
      description={
        <div>
          <p>
            If you want to share your AdapTable reports more widely, (e.g. with
            Symphony chat correspondents or you want to see Live Excel) then you
            can do so via our partner{' '}
            <a href="https://www.ipushpull.com/" target="_blank">
              ipushpull
            </a>
            .
          </p>
          <p>
            If you are an existing ipushpull user, then simply include the
            ipushpull plugin and provide an{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_ipushpullpluginoptions_.ipushpullpluginoptions.html"
              target="_blank"
            >
              IPushPullPluginOptions
            </a>{' '}
            object (which will include your credentials and other relevant
            information).
          </p>
          <p>
            To export data you first need to login using your ipushpull username
            and password, which you can supply in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_ipushpullstate_.ipushpullstate.html"
              target="_blank"
            >
              ipushpull State
            </a>{' '}
            (together with an auto login option).{' '}
          </p>
          <p>
            Then select a report - using either System Reports or those you have
            created via the Export function - and choose the ipushpull folder /
            page which should display this data.{' '}
          </p>
          <p>
            You can either export a 'Snapshot' (one-off) report, or start
            streaming live AdapTable data to ipushpull so that as your grid
            ticks, ipushpull will be automatically updated.
          </p>
          <p>
            There is also an option to add new ipushpull pages (and more
            functionality coming soon...).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/example-adaptableblotter-ipushpull-integration/blob/master/index.ts"
            target="_blank"
          >
            Example Application
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_ipushpullstate_.ipushpullstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_ipushpullapi_.ipushpullapi.html"
            target="_blank"
          >
            Adaptable API
          </a>{' '}
        </div>
      }
    />
  );
};
