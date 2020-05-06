import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/gettingstarted/aggridsetupcolumnsdemo')}
      pageTitle={'Set Up Columns Demo'}
      description={
        <div>
          <p>
            When setting up columns in ag-Grid there are 2 ways to render data
            so that the display value in the cell differs from the 'raw' value:
          </p>
          <ul>
            <li>
              <a
                href="https://www.ag-grid.com/javascript-grid-value-formatters/#value-formatters"
                target="_blank"
              >
                <b>Value Formatters</b>
              </a>
              : enable formatting a column so the display value fits precise
              requirements (e.g. decimal places, showing a currency sign,
              negative numbers in brackets etc.)
            </li>
            <li>
              <a
                href="https://www.ag-grid.com/javascript-grid-cell-rendering-components/#cell-renderer"
                target="_blank"
              >
                <b>Cell Renderers</b>
              </a>
              : designed for more complicated use cases (e.g. showing an image
              in the cell, rendering cells in complex ways)
            </li>
          </ul>
          <p>
            AdapTable will recognise when either of these are being used to
            format the data and will allow you still to filter the column on the
            raw (i.e. underlying) values.
          </p>
          <p>
            Note: AdapTable Functions like{' '}
            <a href="../style/aggridpercentbardemo">Percent Bar</a> and{' '}
            <a href="../style/aggridgradientcolumndemo">Gradient Column</a>{' '}
            effectively create advanced cell renderers on the fly for you.
          </p>
          <p>
            If you want to format columns on the fly, or require more
            complicated date and numeric formats, then use the AdaptTable{' '}
            <a href="../style/aggridformatcolumndemo">Format Column</a>{' '}
            Function.
          </p>
          <p>
            In this demo we have created value formatters for the{' '}
            <b>Efficiency</b> and <b>First Used</b> columns and a Cell Renderer
            for the <b>Rating</b> column.
          </p>
          <p>
            Note also how we pass in the <b>columnTypes</b> array to GridOptions
            and then reference the required column type when we create each
            column (e.g. 'abColDefNumber')
          </p>
        </div>
      }
      helpResources={<div></div>}
    />
  );
};
