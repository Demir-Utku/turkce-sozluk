import * as React from 'react';

import Box from '../components/box';
import Bg from '../components/bg';
import { Logo } from '../components/icons';
import Button from '../components/button';
import Text from '../components/text';

const Menu = () => {
  return (
    <Box flex={1} justifyContent="flex-start">
      <Box height="50%">
        <Bg justifyContent="center" alignItems="center">
          <Logo width={120} height={120} color="white" />
          <Text fontSize={22} fontWeight="bold" color="white">
            Türk Dil Kurumu Başkanlığı
          </Text>
          <Text mt={12} fontSize={18} color="light">
            v.1.0
          </Text>
        </Bg>
      </Box>

      <Box height="50%" bg="white" pt="25%">
        <Button
          mx={32}
          bg="light"
          height={56}
          borderRadius={16}
          style={{
            boxSizing: 'border-box',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Text fontSize={18} color="textDark" fontWeight="bold">
            Hakkında
          </Text>
        </Button>
        <Button
          mt={24}
          mx={32}
          bg="light"
          height={56}
          borderRadius={16}
          style={{
            boxSizing: 'border-box',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Text fontSize={18} color="textDark" fontWeight="bold">
            İletişim
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Menu;
