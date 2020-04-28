import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridnocodedemo')}
      pageTitle={'No Code Demo'}
      description={
        <div>
          <p>
            The No Code Plugin allows you to create an AdapTable instance at
            runtime from any JSON or Excel file that you give it.
          </p>
          <p>
            It will dynamically provide a fully functional AdapTable including
            advanced features like state management and audit log, enabling you
            to attach to the same source daily or multiple different sources.
          </p>
          <p>
            Simply link to a file (or drag and drop) and the AdapTable No Code
            Wizard will appear.
          </p>
          <p>
            In the first step it will read the file and work out which columns
            it contains, giving you the option to change any assumptions around
            datatype and to set editabiity and sortabiity for each column.
          </p>
          <p>
            In the second (optional) step you can set up many of the{' '}
            <a
              href="https://api.adaptabletools.com/modules/_src_adaptableoptions_adaptableoptions_.html"
              target="_blank"
            >
              Adaptable Options
            </a>{' '}
            that you would normally provide at design-time to ensure that your
            AdapTable instance suits your requirements.
          </p>
          <p>
            <b>Note: </b> The source data must have one column that contains{' '}
            <b>unique values</b> which you will set as the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_adaptableoptions_.adaptableoptions.html#primarykey"
              target="_blank"
            >
              Primary Key column
            </a>{' '}
            (by convention the first column).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/example-adaptable-nocode-aggrid"
            target="_blank"
          >
            No Code Example Project
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/tree/master/packages/plugins/nocode-aggrid"
            target="_blank"
          >
            No Code Plugin
          </a>{' '}
          |{' '}
          <a href="https://youtu.be/2vpPKlh898k" target="_blank">
            No Code Video
          </a>{' '}
        </div>
      }
    />
  );
};
