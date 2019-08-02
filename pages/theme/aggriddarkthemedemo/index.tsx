import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/theme/aggriddarkthemedemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Dark Theme Demo'}
      description={
        <>
          <h4>Dark Theme Demo</h4>
          <p>
            This demo shows how you can theme the Adaptable Blotter using the
            shipped 'Dark Theme'.
          </p>
          <p>
            When you use this theme (or the Light Theme) the Adaptable Blotter
            will automatically update the theme of the vendor grid to match your
            choice.
          </p>
          <p>
            The Adaptable Blotter manages themeing through CSS variables. We
            created the Dark Theme just by setting a few properties (mainly
            colours). You can see the css code{' '}
            <a
              href="https://github.com/AdaptableTools/adaptableblotter/blob/dev/packages/adaptableblotter/App_Scripts/themes/dark.scss"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <p>
            You can create your own themes based on this or others (see the
            other demos in this section).
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168191-Theme-Picker"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587452-Theme-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899491-Theme-API"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005211-Theme-Picker-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            .
          </p>
        </>
      }
    />
  );
};
