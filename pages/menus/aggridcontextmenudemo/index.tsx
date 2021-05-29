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
            You can add your own bespoke{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/api/adaptablemenuitem"
              target="_blank"
            >
              Menu Item(s)
            </a>{' '}
            to the Context Menu - through{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/menu-options"
              target="_blank"
            >
              Menu Options
            </a>{' '}
            section of Adaptable Options.{' '}
          </p>
          <p>
            In this example we added 'Float Dashboard' and 'Set System Status'
            menu items (with the latter having sub menu items).
          </p>
          <p>
            When you define a MenuItem you can provide 3 functions that will be
            invoked by AdapTable:
          </p>
          <ul>
            <li>
              {' '}
              <a
                href="https://v9-0--docs-adaptabletools.netlify.app/docs/user-interface/context-menu/#menu-item-onclick"
                target="_blank"
              >
                Clicked Function
              </a>
              : What happens when the Menu Item is clicked
            </li>
            <li>
              {' '}
              <a
                href="https://v9-0--docs-adaptabletools.netlify.app/docs/user-interface/context-menu/#menu-item-render"
                target="_blank"
              >
                Render
              </a>
              : Whether the Menu Item should appear
            </li>
            <li>
              {' '}
              <a
                href="https://v9-0--docs-adaptabletools.netlify.app/docs/user-interface/context-menu/#menu-item-label"
                target="_blank"
              >
                Label
              </a>
              : What Label the Menu Item should have
            </li>
          </ul>
          <p>
            You can also choose which - if any - of the shipped Menu Items are
            available via the <b>showAdaptableContextMenu</b> property of{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/menu-options"
              target="_blank"
            >
              Menu Options
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
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/user-interface/context-menu"
            target="_blank"
          >
            Context Menu Guide
          </a>{' '}
          |{' '}
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/menu-options"
            target="_blank"
          >
            Menu Options
          </a>{' '}
        </div>
      }
    />
  );
};
