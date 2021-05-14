import * as React from 'react';

import Box from './box';

const LoaderText = ({ ...props }) => {
  return <Box bg="light" width={120} height={16} {...props} />;
};

export default LoaderText;
