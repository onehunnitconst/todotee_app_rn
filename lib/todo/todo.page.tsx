import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TodoItemAtom} from './components/todo-item.atom';
import {AddTodoInputMolecule} from './components/add-todo-input.molecule';
import {useAppDispatch, useAppSelector} from '../hooks';
import {
  createTodo,
  deleteTodo,
  getTodos,
  modifyTodo,
} from './reducers/todos.slice';

export function TodoPage() {
  const todoState = useAppSelector(state => state.todosReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <View style={styles.titleSpacing}>
          <Text style={styles.titleText}>TODOTEE</Text>
        </View>
        <AddTodoInputMolecule
          onPressed={title => {
            dispatch(createTodo(title));
          }}
        />
        {!todoState.loading &&
          (todoState.error ? (
            <View>
              <Text>오류가 발생하였습니다.</Text>
              <Button
                onPress={() => dispatch(getTodos())}
                title="다시 불러오기"
              />
            </View>
          ) : (
            todoState.todoList.map((todo, index) => (
              <TodoItemAtom
                key={`todo-item-${index}`}
                completed={todo.completed}
                contents={todo.title}
                onChanged={completed => {
                  dispatch(
                    modifyTodo({
                      id: todo.id,
                      body: {title: todo.title, completed},
                    }),
                  );
                }}
                onDelete={() => {
                  dispatch(deleteTodo({id: todo.id}));
                }}
              />
            ))
          ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '700',
  },
  titleSpacing: {
    paddingBottom: 10,
  },
});
