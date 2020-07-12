import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/userinterface/aggridcolumnmenudemo')}
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
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_userinterfacestate_.usermenuitem.html"
              target="_blank"
            >
              User Menu Item(s)
            </a>{' '}
            to the Column Menu, defining them in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_userinterfacestate_.userinterfacestate.html"
              target="_blank"
            >
              User Interface State
            </a>{' '}
            .{' '}
          </p>{' '}
          <p>
            When you define a UserMenuItem you can reference 2 functions (for
            which you provide the implementation for both in{' '}
            <a
              href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
              target="_blank"
            >
              UserFunctions
            </a>{' '}
            section of AdaptableOptions).
          </p>
          <ul>
            <li>
              <b>UserMenuItemClickedFunction</b>: the function called when a
              Menu Item is clicked.
            </li>
            <li>
              <b>UserMenuItemShowPredicate</b>: the predicate function that runs
              when the menu is opened to return if the menu item should appear.
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
              href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_userinterfaceoptions_.userinterfaceoptions.html#showadaptablecolumnmenu"
              target="_blank"
            >
              User Interface Options
            </a>
          </p>
          <p>
            In this example we removed the <i>'Show Column Chooser'</i> and{' '}
            <i>'View as PieChart'</i> menu items for the 'Contact' column and we
            removed all AdapTable menu items for the 'Cust. Ref' column.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_userinterfacestate_.userinterfacestate.html"
            target="_blank"
          >
            User Interface Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_userinterfaceapi_.userinterfaceapi.html"
            target="_blank"
          >
            User Interface Api
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
            target="_blank"
          >
            User Functions
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_userinterfaceoptions_.userinterfaceoptions.html"
            target="_blank"
          >
            User Interface Options
          </a>{' '}
        </div>
      }
    />
  );
};
