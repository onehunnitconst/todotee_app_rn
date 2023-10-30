import {WritableDraft} from 'immer/dist/internal';
import {TodoResponseDto} from '../../../dto/todo-response.dto';

export interface TodosState {
  readonly loading: boolean;
  readonly todoList: TodoResponseDto[];
  readonly error: any;
}

export const initialState: TodosState = {
  loading: false,
  todoList: [],
  error: null,
};

export const setLoadingState = (state: WritableDraft<TodosState>) => {
  state.loading = true;
  state.error = null;
};

export const setErrorState = (
  state: WritableDraft<TodosState>,
  action: any,
) => {
  state.loading = false;
  state.error = action.error;
};
