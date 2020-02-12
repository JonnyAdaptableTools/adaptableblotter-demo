import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridgradientcolumndemo')}
      pageTitle={'Gradient Column Demo'}
      description={
        <div>
          <p>
            Gradient columns are styled dynamically so that each cell in the
            column is coloured according to its value in relation to a given
            base value and maximum value.
          </p>
          <p>
            When you create a Gradient Column you set a base value, a maximum
            (positive) value and a (positive) colour. The closer the cell value
            is to the maximum value the closer its colour to the set one.
          </p>
          <p>
            By default the base value is 0, but you can set a different base
            value. This ensures the cell is measured against possible values
            only, and the gradient begins from the lowest potential cell value.
          </p>
          <p>
            You can also select a negative maximum value and a negative colour
            for columns which contain negative values.
          </p>
          <p>
            Here we set Gradient Columns for <b>Order Chg.</b> (using positive
            and negative values), <b>Item Count</b> and <b>Package Cost</b>{' '}
            (using bespoke colours).
          </p>
          <p>
            Note that the <b>Item Count</b> Gradient Column has a base value of
            100 (and a maximum value of 170) to ensure that the cells are
            accurately coloured.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_predefinedconfig_gradientcolumnstate_.gradientcolumnstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_api_gradientcolumnapi_.gradientcolumnapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          .
        </div>
      }
    />
  );
};
