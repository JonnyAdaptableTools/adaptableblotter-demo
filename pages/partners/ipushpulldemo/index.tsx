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
            If you are an existing ipushpull user then all you need to do is
            provide an{' '}
            <a
              href="https://bitbucket.org/ipushpull/ipushpull-js/src/master/"
              target="_blank"
            >
              ipushpull object
            </a>{' '}
            (which will include your credentials) in the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_ipushpullstate_.ipushpullstate.html"
              target="_blank"
            >
              ipushpull State
            </a>{' '}
            section of Predefined Config.
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
            Then select a report, and choose the ipushpull folder / page which
            should display this data. You can either export a 'Snapshot'
            (one-off) report, or start streaming live AdapTable data to
            ipushpull.
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
            Github Example
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
          |{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360004099278-iPushPull-FAQ"
            target="_blank"
          >
            FAQ
          </a>{' '}
          |{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360004003298-iPushPull"
            target="_blank"
          >
            Videos
          </a>{' '}
          |{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360004256778#UUID-bea0c942-9326-7490-30b2-9a75709ac7d6"
            target="_blank"
          >
            User Guide
          </a>
          .
        </div>
      }
    />
  );
};
