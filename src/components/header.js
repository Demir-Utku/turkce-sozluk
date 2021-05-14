import * as React from 'react';
import { Animated } from 'react-native';

import Box from './box';
import Bg from './bg';
import { Logo } from './icons';
import SearchComponent from './search';

const HERO_HEIGHT = 230;

const Header = ({ isSearchFocus, onSearchFocus }) => {
  const [bgOpacity] = React.useState(new Animated.Value(1));
  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT));

  React.useEffect(() => {
    if (isSearchFocus) {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
      // hero-height
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }).start();
      // hero-height
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [isSearchFocus, heroHeight, bgOpacity]);

  return (
    <Box as={Animated.View} position="relative" zIndex={1} height={heroHeight}>
      <Box mt={-50} as={Animated.View} opacity={bgOpacity}>
        <Bg pt={50} pb={26}>
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo width={120} color="white" />
          </Box>
        </Bg>
      </Box>

      {/* Search */}
      <Box
        position="absolute"
        left={0}
        bottom={isSearchFocus ? 0 : -42}
        width="100%"
        p={16}
      >
        <SearchComponent onChangeFocus={(status) => onSearchFocus(status)} />
      </Box>
    </Box>
  );
};

export default Header;
