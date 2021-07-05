import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridalertformdemo')}
      pageTitle={'Alert Form Demo'}
      description={
        <div>
          <p>
            Alert Notifications in Adaptable can also include Forms - which are
            created dynamically when required.{' '}
          </p>
          <p>
            This is the same form as used in the Export Module when exporting
            data to a{' '}
            <a href="../export/aggridcustomdestinationdemo">
              Custom Destination
            </a>
            .
          </p>
          <p>
            The Form itself is defined in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
              target="_blank"
            >
              Alert Options
            </a>{' '}
            and referenced by name in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/alert-config"
              target="_blank"
            >
              Alert Config
            </a>
            .
          </p>
          <p>
            This is because Predefined Config can only store strings and not the
            many JavaScript functions which forms and form buttons can include.
          </p>
          <p>
            In this example we have provided an Alert which fires whenever the
            'ContactName' changes, and the Alert contains a Form with a button.
          </p>
          <p>
            We have also included logic to say that the <b>Employee</b> will be
            assigned to 'Robert King' in rows where OrderId {'>'} 300; otherwise
            it will be assigned to 'Paul Andrews'.
          </p>
          <p>
            Notice how the button label varies based on the row context (as well
            as the subsequent onClick action). We have added 2 custom buttons
            which update the first 2 rows to make this easier to demonstrate.
          </p>
        </div>
      }
      helpResources={
        <div>
          {' '}
          <a
            href="https://docs.adaptabletools.com/docs/user-interface/adaptable-form"
            target="_blank"
          >
            Adaptable Form
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/alert-module"
            target="_blank"
          >
            Alert Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/alert-config"
            target="_blank"
          >
            Alert Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
            target="_blank"
          >
            Alert Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/alert-api"
            target="_blank"
          >
            Alert Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/alert-fired-event"
            target="_blank"
          >
            AlertFired Event
          </a>
        </div>
      }
    />
  );
};
