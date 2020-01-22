import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/userinterface/aggridcolumnmenudemo')}
      pageTitle={'Column Menu Demo'}
      description={
        <div>
          <h4>Column Menu Demo</h4>
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
            You can add your own{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_predefinedconfig_userinterfacestate_.usermenuitem.html"
              target="_blank"
            >
              User Menu Item(s)
            </a>{' '}
            to the Column Menu - through{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_predefinedconfig_userinterfacestate_.userinterfacestate.html"
              target="_blank"
            >
              User Interface State
            </a>
            ; in this example we added 'Minimise Dashboard' and 'Set System
            Status' menu items (with the latter having sub menu items).
          </p>
          <p>
            You can also choose which - if any - of the shipped Menu Items are
            available via the <b>showAdaptableColumnMenu</b> property of{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_adaptableoptions_userinterfaceoptions_.userinterfaceoptions.html#showadaptablecolumnmenu"
              target="_blank"
            >
              User Interface Options
            </a>
            ; in this example we removed the <i>Column Chooser</i> and{' '}
            <i>PieChart</i> menu items for the 'Employee' column and all the
            menu items for the 'Contact' column.
          </p>
          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_predefinedconfig_userinterfacestate_.userinterfacestate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_api_userinterfaceapi_.userinterfaceapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_adaptableoptions_userinterfaceoptions_.userinterfaceoptions.html"
              target="_blank"
            >
              User Interface Options
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009004751-Look-and-Feel-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754438-UI-Elements"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
