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
            Gradient columns are styled dynamically so that the each cell is
            coloured according to its value in relation to a given base value
            and maximum value.
          </p>
          <p>
            When you create a Gradient Column you set a base value, a maximum
            (positive) value and a (positive) colour. The closer the cell value
            is to the maximum value the closer its colour to the set one.
          </p>
          <p>
            Creating a base value allows you to ensure that the cell is measured
            against possible values only (e.g. a cell with 1,001 with a base of
            1,000 and a maximum of 2,000 will be very pale.)
          </p>
          <p>
            You can also select a negative maximum value and a negative colour
            for columns which contain negative values.
          </p>
          <p>
            In this example we have set Gradient Columns for{' '}
            <b>Change on Order</b> (using positive and negative values),{' '}
            <b>Item Count</b> and <b>Package Cost</b> (using bespoke colours).
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
