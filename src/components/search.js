import React from 'react';
import { Keyboard } from 'react-native';

import Box from './box';
import Text from './text';
import Input from './input';
import { Search as SearchIcon, Close } from './icons';

import theme from '../utils/theme';
import Button from './button';

function Search({ onChangeFocus }) {
  const [isFocus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    onChangeFocus(isFocus);
  }, [isFocus, onChangeFocus]);

  const handleCancel = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  const handleClear = () => {
    setValue('');
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1} elevation={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
          value={value}
          bg="white"
          height={52}
          color="textDark"
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          pl={52}
          borderRadius="normal"
          onFocus={() => setFocus(true)}
          onChangeText={(text) => setValue(text)}
        />

        {value !== '' && (
          <Button
            onPress={handleClear}
            position="absolute"
            zIndex={1}
            right={16}
            top={14}
          >
            <Close color={theme.colors.textDark} />
          </Button>
        )}

        <Button position="absolute" left={16} top={14}>
          <SearchIcon color={theme.colors.textMedium} />
        </Button>
      </Box>
      {isFocus && (
        <Button onPress={() => handleCancel()} px={15} h={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
}

export default Search;
