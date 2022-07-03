export interface State {
  mainPage: MainPage;
  user: User;
  board: Board;
  task: Task;
}

export interface MainPage {
  boards: Board[];
  tasks: Task[];
}

export interface BoardColumn {
  id: number;
  name: string;
}

export interface Board {
  id: number | null;
  name: string;
  columns: BoardColumn[];
}

export interface Task {
  id: number | null;
  authorId: number;
  executorId: number | null;
  name: string;
  priorityName: string;
  priorityIcon?: string;
  columnId: number;
  date: string;
  boardId: number;
}

export interface User {
  id: number;
  name: string;
}
