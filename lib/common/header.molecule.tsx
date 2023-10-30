import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderMoleculeProps {
  menu: string;
}

export function HeaderMolecule({menu}: HeaderMoleculeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>ajoutee</Text>
      <Text style={styles.menuText}>{menu}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  titleText: {
    fontSize: 32,
    fontWeight: '900',
    fontStyle: 'italic',
    color: 'darkblue',
    textShadowColor: 'lightblue',
    textShadowOffset: {
      width: 3,
      height: 2,
    },
    textShadowRadius: 3,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '800',
  },
});
