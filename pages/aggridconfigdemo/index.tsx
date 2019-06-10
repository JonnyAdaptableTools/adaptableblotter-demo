import React from 'react';
import DynamicDemoPage from '../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../src/client/aggridconfigdemo')}
      pageTitle={'AdaptableBlotter.JS Advanced Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Advanced Demo</h4>
          <p>
            Typically you will pre-ship your Adaptable Blotter with 'Predefined
            Config' - ie objects that you have created at design time for your
            users to access when the application starts for the first time.
          </p>
          <p>
            This demo shows some example Predefined Config. It includes: 2{' '}
            <a href="../gridmanagement/aggridlayoutdemo/">Layouts</a>, 2{' '}
            <a href="../style/aggridconditionalstyledemo/">
              Conditional Styles
            </a>
            , 1 <a href="../gridmanagement/aggridexportdemo/">Report</a>, 1{' '}
            <a href="../style/aggridformatcolumndemo/">Format Column</a>, 1{' '}
            <a href="../gridmanagement/aggridcustomsortdemo/">Custom Sort</a> ,{' '}
            <a href="../search/aggridquicksearchdemo/">Quick Search</a> applied
            and some <a href="../dashboard/">Dashboard</a> changes.
          </p>
          <p>
            As well as pre-loading state the Adaptable Blotter also
            automatically save state. Edit these objects or create some of your
            own and refresh the page and you will see the Blotter will reload
            with all your changes.
          </p>

          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360024888571-User-State"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028584292-Config-Basics"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899251-Config-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819312-Configuration-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
