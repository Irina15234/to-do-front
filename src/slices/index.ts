import { mainPageReducer } from './main-page/main-page-slice';
import { boardReducer } from './board/board-slice';
import { userReducer } from './user/user-slice';

export const rootReducer = {
  mainPage: mainPageReducer,
  board: boardReducer,
  user: userReducer
};
