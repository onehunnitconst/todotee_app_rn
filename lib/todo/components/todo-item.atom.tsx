import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Button, StyleSheet, Text, TextStyle, View} from 'react-native';

interface TodoItemAtomProps {
  completed: boolean;
  contents: string;
  onChanged?: (status: boolean) => void;
  onDelete?: () => void;
}

export function TodoItemAtom({
  completed = false,
  contents,
  onChanged,
  onDelete,
}: TodoItemAtomProps) {
  const getContentsStyle = (): TextStyle => {
    return {
      fontSize: 16,
      textDecorationLine: completed ? 'line-through' : 'none',
      color: completed ? 'lightgrey' : 'black',
    };
  };

  const onValueChange = (newValue: boolean) => {
    if (onChanged) {
      onChanged(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <CheckBox
        boxType="square"
        style={styles.checkBox}
        animationDuration={0.3}
        onValueChange={onValueChange}
        value={completed}
      />
      <View style={styles.spacing} />
      <View style={styles.textArea}>
        <Text style={getContentsStyle()}>{contents}</Text>
      </View>
      <Button title="×" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
  },
  checkBox: {
    width: 20,
    height: 20,
  },
  spacing: {
    width: 10,
  },
  textArea: {
    flex: 1,
  },
});
