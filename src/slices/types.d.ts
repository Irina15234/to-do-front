export interface State {
  mainPage: MainPage;
  user: User;
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
  authorId: number;
  userIds: number[];
  columns: BoardColumn[];
}

export interface Task {
  id: number | null;
  authorId: string | number;
  executorId: number | null;
  name: string;
  priorityName: 'minor' | 'major' | 'middle';
  priorityIcon?: string;
  columnId: number;
  date: string;
  boardId: number;
}

export interface User {
  id: number | null;
  name: string;
}
