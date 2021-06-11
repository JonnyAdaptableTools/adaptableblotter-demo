import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridplusminusdemo')}
      pageTitle={'Plus Minus Demo'}
      description={
        <div>
          <p>
            Plus Minus function allows you to create 'Nudge Rules' which react
            to the '+' or '-' keys being pressed in numeric cells.
          </p>
          <p>
            The Nudge Rule can be based either on a{' '}
            <a
              href="https://docs.adaptabletools.com/docs/common-objects/common-objects-predicate"
              target="_blank"
            >
              Predicate
            </a>{' '}
            or - for more advanced scenarios - a{' '}
            <a
              href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query"
              target="_blank"
            >
              Query
            </a>
            .
          </p>
          <p>In this example we created 2 Plus Minus Rules: </p>
          <ul>
            <li>
              A Predicate of 'Any' for the 'Item Cost' column with a Nudge of{' '}
              <b>10</b>
            </li>
            <li>
              A Query for the same ('Item Cost') column which will increment /
              decrement by 20 if the Employee value in the row is 'Janet
              Leverling
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/plus-minus-config"
            target="_blank"
          >
            Plus / Minus Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/plus-minus-config"
            target="_blank"
          >
            Plus / Minus Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/plus-minus-api"
            target="_blank"
          >
            Plus / Minus Api
          </a>
        </div>
      }
    />
  );
};
