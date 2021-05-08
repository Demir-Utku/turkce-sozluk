import * as React from 'react';
import { Button } from 'react-native';

import BoxCenter from '../components/box-center';

import { Logo } from '../components/icons';

function Search({ navigation }) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Logo width={120} color="red" />
    </BoxCenter>
  );
}

export default Search;
