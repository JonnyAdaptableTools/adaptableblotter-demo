import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/menus/aggridcontextmenudemo')}
      pageTitle={'Context Menu Demo'}
      description={
        <div>
          <p>
            AdapTable provides a Context Menu - accessible when you right-click
            in a cell - which includes shortcuts to functionality relevant to
            that cell (and what is selected).
          </p>
          <p>
            You can add your own{' '}
            <a
              href="https://docs.adaptabletools.com/docs/api/usermenuitem"
              target="_blank"
            >
              User Menu Item(s)
            </a>{' '}
            to the Context Menu - through{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/user-interface-config"
              target="_blank"
            >
              User Interface State
            </a>
            ; in this example we added 'Float Dashboard' and 'Set System Status'
            menu items (with the latter having sub menu items).
          </p>
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
            You can also choose which - if any - of the shipped Menu Items are
            available via the <b>showAdaptableContextMenu</b> property of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-option"
              target="_blank"
            >
              User Interface Options
            </a>
            ; in this example we removed the <i>Filter</i> menu item for the
            'Employee' column and all the menu items for the 'Contact' column.
          </p>
          <p>
            The 2 arguments to the function are Adaptable Menu Item (the menu
            item to show) and Menu Info (which provides details of the current
            cell and cell selection).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/user-interface/context-menu"
            target="_blank"
          >
            Context Menu Guide
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/user-interface-config"
            target="_blank"
          >
            User Interface Predefined Config
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
            href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-option"
            target="_blank"
          >
            User Interface Options
          </a>{' '}
        </div>
      }
    />
  );
};
