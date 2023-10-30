import React, {useCallback, useMemo} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Button, StyleSheet, Text, View} from 'react-native';

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
  const onValueChange = useCallback(
    (newValue: boolean) => {
      if (onChanged) {
        onChanged(newValue);
      }
    },
    [onChanged],
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
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
        contentsText: {
          fontSize: 16,
          textDecorationLine: completed ? 'line-through' : 'none',
          color: completed ? 'lightgrey' : 'black',
        },
      }),
    [completed],
  );

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
        <Text style={styles.contentsText}>{contents}</Text>
      </View>
      <Button title="×" onPress={onDelete} />
    </View>
  );
}
