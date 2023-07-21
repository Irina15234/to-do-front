import { WsStatus } from '../common/enums';

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

export interface DeleteInfo {
  title: string;
  body: string;
  onDelete: () => void;
}

export interface InfoDialogObject {
  title: string;
  body: string | null;
  onClick: () => void;
}

export interface ReplyComment {
  commentId: number | null;
  commentText: string;
}

export interface CommonSettings {
  snackbar: Snackbar;
  isOpenSidePanel: boolean;
  replyComment: ReplyComment;
  isOpenAddTaskModal: boolean;
  taskParentId?: number;
  isOpenUsersBoardDialog: boolean;
  status: WsStatus;
}

export interface MainPage {
  boards: MainViewBoard[];
  tasks: MainViewTask[];
}

export interface BoardColumn {
  id: number;
  name: string;
}

export interface MainViewBoard {
  id: number;
  name: string;
  permissions: number[];
}

export interface Board {
  id: number | null;
  name: string;
  columns: BoardColumn[];
  tasks: BoardTask[];
  permissions?: number[];
}

export interface BoardTask {
  id: number;
  name: string;
  priorityIcon: string;
  columnId: number;
  executorName?: string;
  executorPhoto?: string;
  children?: BoardTask[];
  parentId?: number;
}

export interface MainViewTask {
  id: number;
  name: string;
  priorityIcon: string;
  priorityName: string;
}

export interface CreateViewTask {
  id: null;
  authorId: number;
  executorId: number | null;
  name: string;
  priorityId: number;
  columnId: number;
  date: string;
  boardId: number;
  parentId?: number;
}

export interface Task {
  id: number;
  authorId: number;
  executorId: number | null;
  name: string;
  priority: Priority;
  columnId: number;
  date: string;
  boardId: number;
  boardName: string;
  description: string;
  permissions?: number[];
}

export interface User {
  id: number;
  name: string;
  photo: string | null;
}

export interface FullUserInfo {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  photo: string | null;
}

export interface Priority {
  name: string;
  icon: string;
  id: number;
}

export interface TaskComment {
  id: number;
  children: TaskComment[] | null;
  authorId: number;
  authorName: string;
  text: string;
  date: string;
  update: string | null;
  isDeleted?: boolean;
}

export interface PostComment {
  text: string;
  taskId: number;
  parentId?: number | null;
  authorName: string;
}

export interface Permission {
  id: number;
  name: string;
}

export interface Role {
  id: number;
  name: string;
}

export interface FullViewBoardUser {
  name: string;
  photo: string;
  id: number;
  role: Role | null;
}

export interface FullViewBoardActiveUser extends FullViewBoardUser {
  changeType?: string;
}
