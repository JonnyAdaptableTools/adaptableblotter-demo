import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/menus/aggridcolumnmenudemo')}
      pageTitle={'Column Menu Demo'}
      description={
        <div>
          <p>
            AdapTable provides a Column Menu - accessible via the Column Header
            - which includes shortcuts to all the popup screens relevant to that
            column and its data type.
          </p>
          <p>
            The Column Menu is context sensitive so the menu items shown are
            dependent on the current column and the make up of the Grid.
          </p>
          <p>
            You can add your own bespoke{' '}
            <a
              href="https://docs.adaptabletools.com/docs/api/usermenuitem"
              target="_blank"
            >
              User Menu Item(s)
            </a>{' '}
            to the Column Menu, defining them in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/user-interface-config"
              target="_blank"
            >
              User Interface State
            </a>{' '}
            .{' '}
          </p>{' '}
          <p>
            When you define a UserMenuItem you can reference 3 User Functions
            (for which you provide the implementation for both in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/user-functions/user-functions-overview"
              target="_blank"
            >
              UserFunctions
            </a>{' '}
            section of AdaptableOptions).
          </p>
          <ul>
            <li>
              <a
                href="https://docs.adaptabletools.com/docs/user-functions/user-menu-item-clicked-user-function"
                target="_blank"
              >
                UserMenuItem Clicked Function:
              </a>{' '}
              the User Function called when a Menu Item is clicked.
            </li>
            <li>
              <a
                href="https://docs.adaptabletools.com/docs/user-functions/user-menu-item-show-predicate-user-function"
                target="_blank"
              >
                UserMenuItem Show Predicate:
              </a>{' '}
              the predicate function that runs when the menu is opened to return
              if the menu item should appear.
            </li>
            <li>
              <a
                href="https://docs.adaptabletools.com/docs/user-functions/user-menu-item-label-user-function"
                target="_blank"
              >
                UserMenuItem Label:
              </a>{' '}
              the User Function that runs when the menu is created to allow for
              an alternative label to be displayed.
            </li>
          </ul>
          <p>
            In this example we added 'Float Dashboard' and 'Set System Status'
            menu items (with the latter having sub menu items).
          </p>
          <p>
            You can also choose which - if any - of AdapTable's shipped Column
            Menu items are available by using the <b>showAdaptableColumnMenu</b>{' '}
            function property in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options"
              target="_blank"
            >
              User Interface Options
            </a>
          </p>
          <p>
            In this example we removed the <i>'Create Custom Sort'</i> and{' '}
            <i>'View as PieChart'</i> menu items for the 'Contact' column and we
            removed all AdapTable menu items for the 'Cust. Ref' column.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/user-interface/column-menu"
            target="_blank"
          >
            Column Menu Guide
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/user-interface-config"
            target="_blank"
          >
            User Interface Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/user-interface-api"
            target="_blank"
          >
            User Interface Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/user-functions/user-functions-overview"
            target="_blank"
          >
            User Functions
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options"
            target="_blank"
          >
            User Interface Options
          </a>{' '}
        </div>
      }
    />
  );
};
