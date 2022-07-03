import { mainPageReducer } from './main-page/main-page-slice';
import { boardReducer } from './board/board-slice';
import { userReducer } from './user/user-slice';
import { taskReducer } from './task/task-slice';

export const rootReducer = {
  mainPage: mainPageReducer,
  board: boardReducer,
  task: taskReducer,
  user: userReducer
};
