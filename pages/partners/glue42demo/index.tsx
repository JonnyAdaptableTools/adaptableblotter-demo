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
            <a href="https://youtu.be/tYTGQ1ufhbc" target="_blank">
              <b>See this video</b>
            </a>{' '}
            which shows how AdapTable and the Glue42 desktop combine to allow
            selections in xxx to be shown in zzzz{' '}
          </p>

          <p>
            Another feature which the partnership between AdapTable and the
            Glue42 Desktop provides is very powerful MS Excel integration. This
            includes:
          </p>

          <p>
            <ul>
              <li>
                exporting your adaptable grid, or selection of it, to an MS
                Excel sheet and saving it as an MS Excel file.{' '}
              </li>
              <li>
                capturing value changes in the exported MS Excel sheet and
                updating your Adaptable grid in real time, while at the same
                time respecting predefined cell validation rules.{' '}
              </li>
              <li>schedule grid exports at a specific date and time </li>
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
            from the grid or a selection of it – a row, collection of rows or
            just a collection of cells.
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
          <a href="https://youtu.be/tYTGQ1ufhbc" target="_blank">
            Glue42 Video
          </a>{' '}
        </div>
      }
    />
  );
};
