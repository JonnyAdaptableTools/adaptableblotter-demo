import React, { useState, useMemo, useEffect } from 'react';
import AgGridDemoPage, { AgGridDemoPageProps } from '../AgGridDemoPage';
import dynamic from 'next/dynamic';

import Router from 'next/router';
import LoadingRipple from '../LoadingRipple';

type DynamicComponentType = {
  onReady: (config: any) => void;
};

export default (props: { demo: any } & AgGridDemoPageProps) => {
  const [predefinedConfig, setPredefinedConfig] = useState<any>(null);
  const [adaptableOptions, setAdaptableOptionsString] = useState<any>(null);
  const [exampleCode, setExampleCode] = useState<any>('');
  const [loaded, setLoaded] = useState<boolean>(false);

  const setAdaptableOptions = (adaptableOptions: any) => {
    if (adaptableOptions.vendorGrid) {
      delete adaptableOptions.vendorGrid.rowData;
      delete adaptableOptions.vendorGrid.modules;
    }
    delete adaptableOptions.licenceKey;

    const adaptableOptionsString = JSON.stringify(adaptableOptions, null, 2);

    setAdaptableOptionsString(adaptableOptionsString);
  };

  const { demo, ...pageProps } = props;

  const DynamicComponent = useMemo(
    () =>
      dynamic<DynamicComponentType>(() => props.demo, {
        loading: () => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <LoadingRipple />
            <div style={{ marginTop: 60 }}>
              Generating dummy data, please wait ...
            </div>
          </div>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <AgGridDemoPage
      {...pageProps}
      config={predefinedConfig}
      adaptableOptions={adaptableOptions}
      exampleCode={exampleCode}
      loaded={loaded}
    >
      <DynamicComponent
        onReady={info => {
          setLoaded(true);
          if (info) {
            const { code, predefinedConfig, adaptableOptions, unload } = info;
            setExampleCode(code);
            if (predefinedConfig) {
              setPredefinedConfig(predefinedConfig);
            }

            if (adaptableOptions) {
              setAdaptableOptions(adaptableOptions);
            }

            const doUnload = () => {
              document.documentElement.classList.remove('ab--theme-dark');
              if (typeof unload === 'function') {
                unload();
              }
              Router.events.off('routeChangeStart', doUnload);
            };

            Router.events.on('routeChangeStart', doUnload);
          }
        }}
      />
    </AgGridDemoPage>
  );
};
