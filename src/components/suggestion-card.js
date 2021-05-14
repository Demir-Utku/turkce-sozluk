import * as React from 'react';

import { CardContainer, CardSummary, CardTitle } from './card';
import Box from './box';
import Text from './text';
import LoaderText from './loader-text';

const SuggestionCard = ({ title, onPress, data, ...props }) => {
  return (
    <Box {...props}>
      <Text color="textLight">{title}</Text>

      <CardContainer mt={10} onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <>
            <LoaderText />
            <LoaderText width={200} mt={10} />
          </>
        )}
      </CardContainer>
    </Box>
  );
};

export default SuggestionCard;
