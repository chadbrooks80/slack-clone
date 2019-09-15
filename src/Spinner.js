import React from 'react';

import { Loader, Dimmer } from 'semantic-ui-react';

const Spinner = () => {
  console.log('spinner');
  return (
    <Dimmer active>
      <Loader size="huge" content={'Preparring Chat'} />
    </Dimmer>
  );
};

export default Spinner;
