import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Memo} from '../../domain/memo';

export const MemoDetailPageRouteName = '/memo/detail';

export function MemoDetailPage() {
  const memo: Memo = useMemo(
    () => ({
      id: 1,
      title: 'Lorem ipsum dolor sit amet.',
      contents:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sapiente saepe magni hic possimus veritatis ipsam quae, non dolor laboriosam.',
      createdAt: new Date(),
    }),
    [],
  );

  return (
    <View style={styles.view}>
      <Text style={styles.titleText}>{memo.title}</Text>
      <View style={styles.divider} />
      <Text style={styles.contentsText}>{memo.contents}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
  },
  divider: {
    height: 20,
  },
  contentsText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
