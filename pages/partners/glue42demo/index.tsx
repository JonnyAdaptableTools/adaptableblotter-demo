import React from 'react';

import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/partners/aggridglue42demo')}
      pageTitle={'Glue42 / AdapTable Demo'}
      description={
        <div>
          <p>
            AdapTable's partnership with Glue42 provides deep integration
            between your Grid / Blotter and other Glue42-enabled apps like
            charts, news, trade capture etc.
          </p>

          <p>
            <a href="https://youtu.be/0x8lOIVtDsM" target="_blank">
              <b>This video shows</b>
            </a>{' '}
            AdapTable and the Glue42 desktop combine to allow grid row
            selections to automatically update both internal Glue42 and external
            widgets (e.g. Fidessa Market Data).
          </p>

          <p>
            Another feature which the partnership between AdapTable and the
            Glue42 Desktop provides is very powerful MS Excel integration. This
            includes:
          </p>

          <p>
            <ul>
              <li>
                Exporting data from AdapTable (or running existing reports) to
                an MS Excel sheet and saving it as an MS Excel file
              </li>
              <li>
                Capturing value changes in the exported MS Excel sheet and
                updating AdapTable in real time, while at the same time
                respecting business and cell validation rules
              </li>
              <li>
                Scheduling grid exports to run at specific dates and / or times
              </li>
            </ul>
          </p>
          <p>
            In order to get the demo working, you need the following:
            <ul>
              <li>
                be running on a <b>Windows PC</b>
              </li>
              <li>have Microsoft Excel installed and running</li>
              <li>
                install (and then run) Glue42 Desktop (free from{' '}
                <a href="https://glue42.com/free-trial/" target="_blank">
                  here
                </a>
                )
              </li>
            </ul>
          </p>
          <p>
            To run the demo click the “Login” button in the Glue42 toolbar and
            enter your PC credentials.{' '}
          </p>
          <p>
            Once authenticated, you can select to export either all the data
            from the grid or a selection of it, or a predefined Report.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/plugins/glue42/README.md"
            target="_blank"
          >
            Glue42 Plugin ReadMe
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_glue42pluginoptions_.glue42pluginoptions.html"
            target="_blank"
          >
            Glue42 Plugin Options
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_glue42api_.glue42api.html"
            target="_blank"
          >
            Glue42 Api
          </a>{' '}
          |{' '}
          <a href="https://youtu.be/0x8lOIVtDsM" target="_blank">
            Glue42 Video
          </a>{' '}
        </div>
      }
    />
  );
};
