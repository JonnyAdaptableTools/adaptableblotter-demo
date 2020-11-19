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
            Symphony chat correspondents or you want to collobarate via Excel)
            then you can do so via our partner{' '}
            <a href="https://www.ipushpull.com/" target="_blank">
              ipushpull
            </a>
            .
          </p>
          <p>
            If you are an existing ipushpull user, then simply install the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/plugins/ipushpull/ipushpull-plugin"
              target="_blank"
            >
              ipushpull plugin
            </a>{' '}
            in the 'plugins' section of Adaptable Options.
          </p>
          <p>
            This requires an{' '}
            <a
              href="https://docs.adaptabletools.com/docs/plugins/ipushpull/ipushpull-plugin-optionsl"
              target="_blank"
            >
              IPushPullPluginOptions
            </a>{' '}
            object which will include your credentials and other relevant
            information.
          </p>
          <p>
            To export data you first need to login using your ipushpull username
            and password (which you can supply in IPushPullPluginOptions
            together with an auto login option).{' '}
          </p>
          <p>
            Then select a report - using either System Reports or those you have
            created via the{' '}
            <a href="../../gridmanagement/aggridexportdemo" target="_blank">
              Export
            </a>{' '}
            function - and choose the ipushpull folder / page which should
            display this data.{' '}
          </p>
          <p>
            You can either export a 'Snapshot' (one-off) report, or stream a
            'Live Report' to ipushpull so that as your grid ticks, data
            displayed in ipushpull will be automatically updated.
          </p>
          <p>
            There are also option to add new ipushpull pages and create
            schedules (reports that run at specific times) and more
            functionality will be added in the near future.
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
            href="https://docs.adaptabletools.com/docs/plugins/ipushpull/ipushpull-plugin"
            target="_blank"
          >
            ipushpull Plugin
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/plugins/ipushpull/ipushpull-plugin-options"
            target="_blank"
          >
            ipushpull Plugin Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/plugins/ipushpull/ipushpull-api"
            target="_blank"
          >
            ipushpull Api
          </a>{' '}
        </div>
      }
    />
  );
};
