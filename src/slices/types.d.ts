export interface State {
  mainPage: MainPage;
}

export interface MainPage {
  boards: Board[];
  tasks: Task[];
}

export interface Board {
  id: string | number;
  authorId: string | number;
  name: string;
}

export interface Task {
  id: string | number;
  authorId: string | number;
  executorId?: string | number;
  name: string;
  priority: 'minor' | 'major' | 'middle';
  statusId: number; // список статусов будет лежать в бд (соответствовать количесву колонок на доске) и приходить по запросу
  date: string;
}
