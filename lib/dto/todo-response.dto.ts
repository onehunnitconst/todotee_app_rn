export interface TodoResponseDto {
  readonly id: number;
  readonly title: string;
  readonly completed: boolean;
  readonly completedAt: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
