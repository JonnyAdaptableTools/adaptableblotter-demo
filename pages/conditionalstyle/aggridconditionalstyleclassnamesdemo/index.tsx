import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/conditionalstyle/aggridconditionalstyleclassnamesdemo'
      )}
      pageTitle={'Conditional Style Class Names Demo'}
      description={
        <div>
          <p>
            The Style for a Conditional Style can (like Format Column) be
            provided by a CSS Class.
          </p>
          <p>
            The name of the CSS Class if supplied in the{' '}
            <a
              href="https://docs.adaptabletools.com/api/userinterfacestate#styleclassnames"
              target="_blank"
            >
              styleClassNames
            </a>{' '}
            property of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options"
              target="_blank"
            >
              User Interface Options
            </a>{' '}
            and then reference in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/conditional-style-config"
              target="_blank"
            >
              Conditional Style Config.
            </a>{' '}
          </p>
          <p>
            In this example the 'Employee' Column uses the style pre-defined in
            the <b>employeeStyle</b> ClassName where the cell value is Stephen
            or Laura
          </p>
          <p>
            <b>Note:</b> The Conditional Style also uses the 'new_starter'{' '}
            <b>custom predicate</b> defined in the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/custom-predicate-defs-options"
              target="_blank"
            >
              customPredicateDefs
            </a>{' '}
            section of Adaptable Options.)
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/conditional-style-module"
            target="_blank"
          >
            Conditional Style Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/conditional-style-config"
            target="_blank"
          >
            Conditional Style Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/conditional-style-api"
            target="_blank"
          >
            Conditional Style API
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options"
            target="_blank"
          >
            User Interface Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-predicate"
            target="_blank"
          >
            Predicate
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query"
            target="_blank"
          >
            Expression
          </a>{' '}
        </div>
      }
    />
  );
};
