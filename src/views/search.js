import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import Box from '../components/box';
import SuggestionCard from '../components/suggestion-card';
import SearchHistoryList from '../components/search-history-list';
import Header from '../components/header';

const DATA = [
  {
    id: '1',
    title: 'First Item 1',
    summary: 'açıklama 1',
  },
  {
    id: '2',
    title: 'First Item 2',
    summary: 'açıklama 2',
  },
  {
    id: '3',
    title: 'First Item 3',
    summary: 'açıklama 3',
  },
];

function Search({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false);
  const [homeData, setHomeData] = React.useState(null);

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };

  React.useEffect(() => {
    getHomeData().then((r) => r.json());
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#020202');
    }, [isSearchFocus]),
  );

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {/* Header */}
      <Header isSearchFocus={isSearchFocus} onSearchFocus={setSearchFocus} />

      {/* Content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={18} py={28} flex={1}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              title="Bir Kelime"
              onPress={() => {
                navigation.navigate('Detail', {
                  keyword: homeData?.kelime[0]?.madde,
                });
              }}
            />

            <SuggestionCard
              mt={40}
              data={homeData?.atasoz[0]}
              title="Bir Deyim - Atasözü"
              onPress={() => {
                navigation.navigate('Detail', {
                  keyword: homeData?.atasoz[0]?.madde,
                });
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Search;
