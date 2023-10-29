import {Axios} from 'axios';
import {TodoRequestDto} from '../dto/todo-request.dto';
import {TodoResponseDto} from '../dto/todo-response.dto';

export class TodoApi {
  constructor(readonly client: Axios) {}

  async getTodos(): Promise<TodoResponseDto[]> {
    const response = await this.client.get('/todos');
    return JSON.parse(response.data);
  }

  async getTodoById(id: number): Promise<TodoResponseDto> {
    const response = await this.client.get(`/todos/${id}`);
    return JSON.parse(response.data);
  }

  async createTodo(title: string): Promise<TodoResponseDto> {
    const requestBody: TodoRequestDto = {
      title,
      completed: false,
    };
    const response = await this.client.post(
      '/todos',
      JSON.stringify(requestBody),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return JSON.parse(response.data);
  }

  async modifyTodo(id: number, body: TodoRequestDto): Promise<void> {
    await this.client.patch(`/todos/${id}`, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async deleteTodoById(id: number): Promise<void> {
    await this.client.delete(`/todos/${id}`);
  }
}
