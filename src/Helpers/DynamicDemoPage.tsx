import React, { useState, useMemo, useEffect } from 'react';
import AgGridDemoPage, { AgGridDemoPageProps } from '../AgGridDemoPage';
import dynamic from 'next/dynamic';

type DynamicComponentType = {
  onReady: (config: any) => void;
};

export default (props: { demo: any } & AgGridDemoPageProps) => {
  const [predefinedConfig, setPredefinedConfig] = useState<any>(null);
  const [adaptableOptions, setBlotterOptionsString] = useState<any>(null);

  const setAdaptableOptions = (adaptableOptions: any) => {
    if (adaptableOptions.vendorGrid) {
      delete adaptableOptions.vendorGrid.rowData;
    }
    delete adaptableOptions.licenceKey;

    const blotterOptionsString = JSON.stringify(adaptableOptions, null, 2);

    setBlotterOptionsString(blotterOptionsString);
  };

  const { demo, ...pageProps } = props;

  const DynamicComponent = useMemo(
    () =>
      dynamic<DynamicComponentType>(() => props.demo, {
        loading: () => null,
        ssr: false,
      }),
    []
  );

  return (
    <AgGridDemoPage
      {...pageProps}
      config={predefinedConfig}
      adaptableOptions={adaptableOptions}
    >
      <DynamicComponent
        onReady={info => {
          if (info) {
            const { predefinedConfig, adaptableOptions } = info;
            setPredefinedConfig(predefinedConfig);
            setAdaptableOptions(adaptableOptions);
          }
        }}
      />
    </AgGridDemoPage>
  );
};
