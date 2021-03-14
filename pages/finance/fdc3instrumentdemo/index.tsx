import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/finance/fdc3instrumentdemo')}
      pageTitle={'FDC3 Instrument Demo'}
      description={
        <div>
          <p>
            When a Column is defined as an 'Instrument Column' in the Finance
            Plugin, AdapTable will create a <b>Broadcast Instrument</b> menu
            item in the Column's{' '}
            <a
              href="https://docs.adaptabletools.com/docs/user-interface/context-menu"
              target="_blank"
            >
              Context Menu
            </a>{' '}
            .{' '}
          </p>
          <p>
            Clicking that menu item will cause AdapTable to fire a
            'BroadcastInstrument' event that contains an{' '}
            <a
              href="https://fdc3.finos.org/docs/1.0/context-spec"
              target="_blank"
            >
              FDC3 Instrument Message
            </a>{' '}
            as context.
          </p>
          <p>
            The message will include the name from the current (i.e. clicked)
            cell and instrument data from other cells in the row.
          </p>
          <p>
            In this example we have configured 'Name' as the Instrument Column
            and added 'Ticker' and 'Cusip' as data columns - see the console for
            the FDC3 message that is produced..
          </p>
          <p>
            Note: if running in AdapTable in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/plugins/openfin/openfin-plugin"
              target="_blank"
            >
              OpenFin
            </a>{' '}
            then the message will be automatically re-broadcast on the current
            channel so other apps / widgets can react as required.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/plugins/finance/finance-plugin"
            target="_blank"
          >
            Finance Plugin
          </a>{' '}
          |{' '}
          <a
            href="https://fdc3.finos.org/docs/1.0/context-spec"
            target="_blank"
          >
            FDC3 Specification
          </a>
        </div>
      }
    />
  );
};
