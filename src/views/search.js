import * as React from 'react';
import { Button } from 'react-native';

import Box from '../components/box';
import SearchComponent from '../components/search';

import { Logo } from '../components/icons';

function Search({ navigation }) {
  return (
    <Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box py={20}>
        <Logo width={120} color="red" />
      </Box>

      <Box p={10}>
        <SearchComponent />
      </Box>
    </Box>
  );
}

export default Search;
