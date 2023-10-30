import React, {useMemo} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Memo} from '../../domain/memo';
import {MemoItemMolecule} from './components/memo-item.molecule';
import {MemoDetailPageRouteName} from '../memo-detail/memo-detail.page';
import {HeaderMolecule} from '../../common/header.molecule';

export const MemoPageRouteName = '/memo';

export function MemoPage({navigation}) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        view: {
          paddingHorizontal: 20,
        },
        memoListView: {
          paddingVertical: 20,
        },
      }),
    [],
  );

  const memos: Memo[] = useMemo(
    () => [
      {
        id: 1,
        title: 'Lorem ipsum 1',
        contents:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam aperiam dolores cupiditate explicabo, error ullam ab dicta qui quos nobis.',
        createdAt: new Date(2023, 2, 1),
      },
      {
        id: 2,
        title: 'Lorem ipsum 2',
        contents:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam aperiam dolores cupiditate explicabo, error ullam ab dicta qui quos nobis.',
        createdAt: new Date(2023, 4, 20),
      },
      {
        id: 3,
        title: 'Lorem ipsum 3',
        contents:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam aperiam dolores cupiditate explicabo, error ullam ab dicta qui quos nobis.',
        createdAt: new Date(2023, 4, 20),
      },
    ],
    [],
  );

  return (
    <SafeAreaView>
      <HeaderMolecule menu="MEMOS" />
      <View style={styles.view}>
        <ScrollView contentContainerStyle={styles.memoListView}>
          {memos.map((memo, index) => (
            <View style={{marginTop: index > 0 ? 20 : 0}}>
              <MemoItemMolecule
                key={`memo-item-${index}`}
                memo={memo}
                onPress={() => {
                  navigation.navigate(MemoDetailPageRouteName);
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
