import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/config/aggridpredefinedconfigdemo')}
      pageTitle={'Adaptable Predefined Config Demo'}
      description={
        <div>
          <h4>Predefined Config Demo</h4>
          <p>
            Typically you will pre-ship your Adaptable instance with 'Predefined
            Config' - ie objects that you have created at design time for your
            users to access when the application starts for the first time.
          </p>
          <p>
            This demo shows some example Predefined Config. It includes: 2{' '}
            <a href="../../gridmanagement/aggridlayoutdemo/">Layouts</a>, 2{' '}
            <a href="../../style/aggridconditionalstyledemo/">
              Conditional Styles
            </a>
            , 1 <a href="../../gridmanagement/aggridexportdemo/">Report</a>, 1{' '}
            <a href="../../style/aggridformatcolumndemo/">Format Column</a>, 1{' '}
            <a href="../../gridmanagement/aggridcustomsortdemo/">Custom Sort</a>{' '}
            , <a href="../../search/aggridquicksearchdemo/">Quick Search</a>{' '}
            applied and some <a href="../../dashboard/">Dashboard</a> changes.
          </p>
          <p>
            As well as pre-loading state Adaptable also automatically save
            state. Edit these objects or create some of your own and refresh the
            page and you will see Adaptable will reload with all your changes.
          </p>

          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754817-Predefined-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819312-Configuration-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754837-User-State"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
