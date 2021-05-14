import React from 'react';
import Text from './text';
import Button from './button';

export const SimpleCardContainer = ({ children, ...props }) => {
  return (
    <Button
      justifyContent="flex-start"
      p={16}
      bg="white"
      borderRadius="normal"
      {...props}
    >
      {children}
    </Button>
  );
};

export const SimpleCardTitle = ({ children }) => {
  return (
    <Text fontSize={16} fontWeight="bold">
      {children}
    </Text>
  );
};
