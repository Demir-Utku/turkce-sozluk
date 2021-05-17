import 'react-native-gesture-handler';
import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from './views/search';
import Favorite from './views/favorite';
import History from './views/history';
import Detail from './views/detail';
import Menu from './views/menu';
import TabBar from './components/tab-bar';
import { Left, More } from './components/icons';

import theme from './utils/theme';
import Button from './components/button';
import Box from './components/box';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const SearchStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={({ navigation }) => {
          return {
            headerTitle: '',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'transparent',
              height: '1%',
            },
            headerRight: () => (
              <Box>
                <TouchableOpacity
                  style={{
                    marginTop: 48,
                    marginRight: 4,
                    padding: 12,
                  }}
                  onPress={() => navigation.navigate('Menu')}
                >
                  <More color="white" />
                </TouchableOpacity>
              </Box>
            ),
          };
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={Detail}
        options={({ route, navigation }) => {
          return {
            title: route.params?.title,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: 'transparent',
            },
            headerLeft: () => (
              <Button
                height="100%"
                px={20}
                onPress={() => navigation.navigate('Search')}
              >
                <Left color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button
                height="100%"
                px={20}
                onPress={() => navigation.navigate('Search')}
              >
                <More color={theme.colors.textDark} />
              </Button>
            ),
          };
        }}
      />
      <HomeStack.Screen
        name="Menu"
        component={Menu}
        options={({ navigation }) => {
          return {
            headerTintColor: theme.colors.textDark,
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Button
                height="100%"
                px={20}
                onPress={() => navigation.navigate('Search')}
              >
                <Left color={theme.colors.textDark} />
              </Button>
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favorite" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
