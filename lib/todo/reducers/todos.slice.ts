import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import {
  TodosState,
  initialState,
  setErrorState,
  setLoadingState,
} from './todos.state';
import {TodoRequestDto} from '../../dto/todo-request.dto';
import {TodoApi} from '../../api/todo.api';
import {client} from '../../api/client';

const api = new TodoApi(client);

export const getTodos = createAsyncThunk('todos/getTodos', () =>
  api.getTodos(),
);

const addGetTodosCaseReducer = (
  builder: ActionReducerMapBuilder<TodosState>,
) => {
  builder
    .addCase(getTodos.pending, state => {
      setLoadingState(state);
    })
    .addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todoList = action.payload;
    })
    .addCase(getTodos.rejected, (state, action) => {
      setErrorState(state, action);
    });
};

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  (title: string) => api.createTodo(title),
);

const setCreateTodoCaseReducer = (
  builder: ActionReducerMapBuilder<TodosState>,
) => {
  builder
    .addCase(createTodo.pending, state => {
      setLoadingState(state);
    })
    .addCase(createTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todoList.push(action.payload);
    })
    .addCase(createTodo.rejected, (state, action) => {
      setErrorState(state, action);
    });
};

export const modifyTodo = createAsyncThunk(
  'todos/modifyTodo',
  async (data: {id: number; body: TodoRequestDto}) => {
    await api.modifyTodo(data.id, data.body);
    const modifiedTodo = await api.getTodoById(data.id);
    return {
      id: data.id,
      todo: modifiedTodo,
    };
  },
);

const setModifyTodoCaseReducer = (
  builder: ActionReducerMapBuilder<TodosState>,
) => {
  builder
    .addCase(modifyTodo.pending, state => {
      setLoadingState(state);
    })
    .addCase(modifyTodo.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.todoList.findIndex(
        value => value.id === action.payload.id,
      );
      state.todoList[index] = action.payload.todo;
    })
    .addCase(modifyTodo.rejected, (state, action) => {
      setErrorState(state, action);
    });
};

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (data: {id: number}) => {
    await api.deleteTodoById(data.id);
    return data;
  },
);

const setDeleteTodoCaseReducer = (
  builder: ActionReducerMapBuilder<TodosState>,
) => {
  builder
    .addCase(deleteTodo.pending, state => {
      setLoadingState(state);
    })
    .addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.todoList.findIndex(
        value => value.id === action.payload.id,
      );
      state.todoList.splice(index, 1);
    })
    .addCase(deleteTodo.rejected, (state, action) => {
      setErrorState(state, action);
    });
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    addGetTodosCaseReducer(builder);
    setCreateTodoCaseReducer(builder);
    setModifyTodoCaseReducer(builder);
    setDeleteTodoCaseReducer(builder);
  },
});

export default todosSlice.reducer;
