import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import React from 'react';
import {TodoPage, TodoPageRouteName} from './todo/todo.page';
import {MemoPage, MemoPageRouteName} from './memo/memo.page';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator';
import {HeaderMolecule} from '../common/header.molecule';

export const MainPageRouteName = '/';

export type MainPageProps = NativeStackScreenProps<
  RootStackParamList,
  typeof MainPageRouteName
>;

export type MainTabParamList = {
  [TodoPageRouteName]: NavigatorScreenParams<RootStackParamList>;
  [MemoPageRouteName]: NavigatorScreenParams<RootStackParamList>;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainPage() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TodoPageRouteName}
        component={TodoPage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={MemoPageRouteName}
        component={MemoPage}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainPage;
