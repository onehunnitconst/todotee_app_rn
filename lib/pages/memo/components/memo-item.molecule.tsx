import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Memo} from '../../../domain/memo';

interface MemoItemMoleculeProps {
  memo: Memo;
  onPress?: () => void;
}

export function MemoItemMolecule({memo, onPress}: MemoItemMoleculeProps) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.view}>
        <Text style={styles.titleText}>{memo.title}</Text>
        <View style={styles.divider} />
        <Text style={styles.contentsText}>{memo.contents}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    marginVertical: 10,
    backgroundColor: 'lightgrey',
  },
  contentsText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
