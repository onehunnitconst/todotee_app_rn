import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

interface AddTodoInputMoleculeProps {
  onPressed: (contents: string) => void;
}

export function AddTodoInputMolecule({onPressed}: AddTodoInputMoleculeProps) {
  const [contents, setContents] = useState<string>('');

  const onChangeText = (text: string) => setContents(text);

  const clearInput = () => setContents('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={contents}
        onChangeText={onChangeText}
      />
      <Button
        title="+"
        onPress={() => {
          onPressed(contents);
          clearInput();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexGrow: 1,
  },
});
