import * as React from 'react';
import { Platform, StatusBar, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useFocusEffect } from '@react-navigation/native';

import Box from '../components/box';
import Text from '../components/text';
import ActionButton, { ActionButtonTitle } from '../components/action-button';
import DetailSummaryItemContainer from '../components/detail-summary-item';
import { Favorite, Sound, Hand } from '../components/icons';
import theme from '../utils/theme';
import LoaderText from '../components/loader-text';

function Detail({ route }) {
  const keyword = route.params?.keyword;
  const [data, setData] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1');
    }, []),
  );

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const detailData = await response.json();
    setData(detailData[0]);
  };

  React.useEffect(() => {
    getDetailData().then((r) => r.json());
  }, []);

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text color="textLight" mt={6}>
              {data?.telaffuz && data?.telaffuz} {data?.lisan}
            </Text>
          ) : null}
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data}>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml={12}>
            <Favorite width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton disabled={!data} ml="auto">
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map((item) => (
                <DetailSummaryItemContainer
                  key={item.anlam_sira}
                  data={item}
                  border={item.anlam_sira !== '1'}
                />
              ))
            : [1, 2, 3].map((index) => (
                <DetailSummaryItemContainer key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItemContainer>
              ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Detail;
