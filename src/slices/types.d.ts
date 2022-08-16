export interface State {
  mainPage: MainPage;
  user: User;
  board: Board;
  task: Task;
  common: CommonSettings;
}

export interface Snackbar {
  open: boolean;
  message: string;
  variant: string;
}

export interface CommonSettings {
  snackbar: Snackbar;
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
  tasks: BoardTask[];
}

export interface BoardTask {
  id: number;
  name: string;
  priorityIcon: string;
  columnId: number;
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
