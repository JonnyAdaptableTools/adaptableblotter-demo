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
            You can create a 'default' Nudge Value for a whole column, or a
            'custom' Nudge Value which will increment / decrement based on other
            cells in the row.
          </p>
          <p>In this example we created 2 Plus Minus Rules: </p>
          <ul>
            <li>a default one for the 'Item Cost' column of 10</li>
            <li>
              a custom rule for the same column which will increment / decrement
              by 20 if Employee is 'Janet Leverling
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/plus-minus-function"
            target="_blank"
          >
            Plus / Minus Function
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
          |{' '}
        </div>
      }
    />
  );
};
