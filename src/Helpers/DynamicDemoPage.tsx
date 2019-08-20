import React, { useState, useMemo, useEffect } from 'react';
import AgGridDemoPage, { AgGridDemoPageProps } from '../AgGridDemoPage';
import dynamic from 'next/dynamic';

type DynamicComponentType = {
  onReady: (config: any) => void;
};

export default (props: { demo: any } & AgGridDemoPageProps) => {
  const [predefinedConfig, setPredefinedConfig] = useState<any>(null);
  const [blotterOptions, setBlotterOptionsString] = useState<any>(null);

  const setBlotterOptions = (blotterOptions: any) => {
    if (blotterOptions.vendorGrid) {
      delete blotterOptions.vendorGrid.rowData;
    }
    delete blotterOptions.licenceKey;

    const blotterOptionsString = JSON.stringify(blotterOptions, null, 2);

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
      blotterOptions={blotterOptions}
    >
      <DynamicComponent
        onReady={info => {
          if (info) {
            const { predefinedConfig, blotterOptions } = info;
            setPredefinedConfig(predefinedConfig);
            setBlotterOptions(blotterOptions);
          }
        }}
      />
    </AgGridDemoPage>
  );
};
