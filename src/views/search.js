import * as React from 'react';
import {
  ImageBackground,
  Platform,
  StatusBar,
  Text,
  Animated,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import Box from '../components/box';
import SearchComponent from '../components/search';

import { Logo } from '../components/icons';

import bg from '../assets/bg.jpg';

function Search() {
  const [heroHeight] = React.useState(new Animated.Value(285));
  const [isSearchFocus, setSearchFocus] = React.useState(false);

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 250,
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 250,
      }).start();
    }
  }, [isSearchFocus, heroHeight]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#020202');
    }, [isSearchFocus]),
  );

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        {!isSearchFocus && (
          <Box
            as={ImageBackground}
            source={bg}
            style={{ width: '100%', height: '100%' }}
          >
            {/* Logo */}
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo width={120} color="white" />
            </Box>
          </Box>
        )}
        {/* Search */}
        <Box
          position="absolute"
          left={0}
          bottom={isSearchFocus ? 0 : -42}
          width="100%"
          p={16}
        >
          <SearchComponent onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>

      {/* Content */}
      <Box flex={1} bg="white" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>Geçmiş</Text>
          </Box>
        ) : (
          <Box p={30} flex={1}>
            <Text>Öneri</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Search;
