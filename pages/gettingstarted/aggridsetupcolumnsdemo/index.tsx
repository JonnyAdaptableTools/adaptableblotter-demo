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
            raw (i.e. underlying) values (e.g. in the quick filter bar).
          </p>
          <p>
            The only difference is that when a Value Formatter is used the{' '}
            <i>Display Value</i> is shown in the Filter dropdown, but for a Cell
            Renderer the <i>raw value</i> is displayed.
          </p>
          <p>
            Note: AdapTable functionality like{' '}
            <a href="../formatcolumn/aggridpercentbardemo">Percent Bar</a> and{' '}
            <a href="../formatcolumn/aggridgradientcolumndemo">
              Gradient Column
            </a>{' '}
            effectively create advanced cell renderers on the fly for you.
          </p>
          <p>
            To format columns on the fly, or for more complicated date and
            numeric formats, use the AdaptTable{' '}
            <a href="../formatcolumn/aggridformatcolumndemo">Format Column</a>{' '}
            Function (as done below for <b>First Bought</b> and <b>Price</b>{' '}
            Columns)
          </p>
          <p>
            In this demo we have created value formatters for the{' '}
            <b>Efficiency</b>, <b>First Used</b> and <b>Efficiency Rating</b>{' '}
            columns and a Cell Renderer for the <b>Energy Rating</b> column.
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
