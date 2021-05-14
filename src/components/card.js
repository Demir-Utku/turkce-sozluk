import React from 'react';
import Text from './text';
import Box from './box';
import Button from './button';

export const CardContainer = ({ children, ...props }) => {
  return (
    <Button py={16} px={12} bg="white" borderRadius="normal" {...props}>
      <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Button>
  );
};

export const CardTitle = ({ children }) => {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  );
};

export const CardSummary = ({ children }) => {
  return (
    <Text color="textMedium" fontSize={14} mt={8}>
      {children}
    </Text>
  );
};
