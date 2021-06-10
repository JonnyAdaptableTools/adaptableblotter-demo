import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptablestate/aggridapplicationdataentriesdemo'
      )}
      pageTitle={'Application Data Entries Demo'}
      description={
        <div>
          <p>
            AdapTable includes the Application function as means of allowing
            developers to ship custom state with the System.
          </p>
          <p>
            This is done through{' '}
            <b>
              <a
                href="https://docs.adaptabletools.com/docs/predefined-config/application-config"
                target="_blank"
              >
                Application Data Entries
              </a>{' '}
            </b>
            which are simple Key / Value pair objects.
          </p>
          <p>
            There is no restriction on what can be stored in the the 'Value'
            other than that data must be able to be stringified - as it will be
            persistd as JSON.{' '}
          </p>
          <p>The potential uses of Application Data Entries are endless. </p>
          <p>
            In this example we added a 'Role' entry which is then used to decide
            the Entitlement for the Layout Module; as the given value is 'Basic
            User' the function becomes 'ReadOnly'
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/state-guide"
            target="_blank"
          >
            Adaptable State Guide
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/application-config"
            target="_blank"
          >
            Application Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/application-api"
            target="_blank"
          >
            Application API
          </a>
        </div>
      }
    />
  );
};
