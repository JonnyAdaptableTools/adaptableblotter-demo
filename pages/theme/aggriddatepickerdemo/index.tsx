import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/theme/aggriddatepickerdemo')}
      pageTitle={'Date Picker Demo'}
      documentClassName="datepicker-css-rules"
      description={
        <div>
          <p>
            The Date Picker in AdapTable - used primarily in Date Column Filters
            - is fully{' '}
            <a
              href="https://docs.adaptabletools.com/docs/theming/date-picker"
              target="_blank"
            >
              styleable
            </a>{' '}
            and{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options#date-input-options"
              target="_blank"
            >
              configurable
            </a>{' '}
            .
          </p>
          <p>
            <b>Styling</b>
            <br />
            Most UI elements in the Date Picker can be customised through{' '}
            <a
              href="https://docs.adaptabletools.com/docs/theming/date-picker"
              target="_blank"
            >
              CSS Properties
            </a>
            .
            <br />
            In this demo we have set the background to light blue and changed
            the selected element to be square (instead of round) with a display
            of light yellow text on a brown background. <br />
            We have also changed the hover colour to gray, the font to Verdana,
            added a thicker border (3px) and provided a larger cell size of 35px
            (default is 30).
          </p>
          <p>
            <b>Configuration</b>
            <br />
            There are a number of properties in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options#date-input-options"
              target="_blank"
            >
              User Interface Options
            </a>{' '}
            to configure the Date Picker. In this demo we have set{' '}
            <i>showOutsideDays</i> to <code>false</code> and{' '}
            <i>showWeekNumber</i> to <code>true</code>. <br />
            We have changed the <i>dateFormat</i> to <code>MMM do yyyy</code> to
            change how dates appear.
            <br />
            And we have configured that 3 buttons should appear at the bottom:{' '}
            <code>today, tomorrow, yesterday</code> together with spacing
            instructions.
          </p>
          <p>
            Click on the calendar icon in the 'Order Date' Column Quick Filter
            Bar to see how the Date Picker appears.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options#date-input-options"
            target="_blank"
          >
            Date Input Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/theming/date-picker"
            target="_blank"
          >
            Date Picker Theming
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/theming/theming-overview"
            target="_blank"
          >
            Theming
          </a>
        </div>
      }
    />
  );
};
