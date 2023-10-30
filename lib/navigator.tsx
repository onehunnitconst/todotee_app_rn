import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage, {MainPageRouteName} from './pages/main.page';
import {
  MemoDetailPage,
  MemoDetailPageRouteName,
} from './pages/memo-detail/memo-detail.page';
import {Text} from 'react-native';

export type RootStackParamList = {
  [MainPageRouteName]: undefined;
  [MemoDetailPageRouteName]: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MainPageRouteName}>
        <Stack.Screen
          name={MainPageRouteName}
          component={MainPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={MemoDetailPageRouteName}
          component={MemoDetailPage}
          options={{
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
