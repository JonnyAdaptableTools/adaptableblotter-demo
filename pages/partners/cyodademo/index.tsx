import React from 'react';

import MainPage from '../../../src/MainPage';

export default () => {
  return (
    <MainPage pageTitle="">
      <p>
        <h4>Cyoda</h4>
      </p>
      <p>
        If you want to run AdapTable on a large volumes of back end data, then
        you’ll need to consider a server-side solution. Cyoda offers a easy and
        fast means to integrate data from disparate source systems onto an
        infinitely scalable platform that is fully integrated to AdapTable.
      </p>
      <p>
        Cyoda uses an innovative approach to data integration, which is far
        faster to implement than the traditional approach of a fixed,
        centralised data model . It also uses ‘aliases’ to simplify the assembly
        of data, so that users can interact with simple business terms, without
        needing to understand the complexities of the underlying source data.
        The approach is also extensible - so new data sources or use cases may
        be added with ease.
      </p>
      <p>
        The technology is 100% horizontal distributed, whilst maintaining ACID
        consistency, so there’s no limit to the amount of data you can store and
        report on. It’s highly performant, with in-built resilience, so there’s
        no need for separate DR.
      </p>
      <p>
        Fast to build. Easy to Change - all at a fraction of the TCO of a
        conventional data hub.
      </p>
      <p>
        <iframe
          src="https://player.vimeo.com/video/458693178"
          width="640"
          height="361"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </p>
    </MainPage>
  );
};
