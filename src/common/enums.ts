export enum TaskView {
  full = 'FULL',
  main = 'MAIN',
  board = 'BOARD'
}

export enum UserInfoView {
  full = 'FULL',
  min = 'MIN'
}

export enum BoardUserView {
  full = 'FULL',
  base = 'BASE',
  inactive = 'INACTIVE'
}

export enum WsEventType {
  board = 'BOARD_STATUS',
  task = 'TASK_STATUS'
}

export enum WsStatus {
  actual = 'ACTUAL',
  outdated = 'OUTDATED'
}
