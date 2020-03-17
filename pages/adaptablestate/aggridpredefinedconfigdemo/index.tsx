import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptablestate/aggridpredefinedconfigdemo'
      )}
      pageTitle={'Predefined Config Demo'}
      description={
        <div>
          <p>
            Typically you will pre-ship your AdapTable instance with 'Predefined
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
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/adaptable-state-guide.md"
            target="_blank"
          >
            Adaptable State Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_predefinedconfig_.predefinedconfig.html"
            target="_blank"
          >
            Predefined Config
          </a>
        </div>
      }
    />
  );
};
