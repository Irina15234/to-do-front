import useWebSocket from 'react-use-websocket';
import { useEffect } from 'react';
import { getBoardOrTaskId, isBoardPage } from '../helpers';
import { WsEventType, WsStatus } from '../enums';
import { useDispatch } from 'react-redux';
import { setStatusAction } from '../../slices/common/common-slice';

const WS_URL = 'ws://localhost:9000';

export const useUpdateStatus = () => {
  const dispatch = useDispatch();

  const { sendMessage, lastMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    queryParams: { id: getBoardOrTaskId() || -1, type: isBoardPage() ? 'board' : 'task' }
  });

  useEffect(() => {
    sendMessage(
      JSON.stringify({
        type: isBoardPage() ? WsEventType.board : WsEventType.task,
        message: WsStatus.actual
      })
    );
  }, [sendMessage]);

  useEffect(() => {
    if (lastMessage?.data === WsStatus.actual) {
      dispatch(setStatusAction(WsStatus.actual));
    }
    if (lastMessage?.data === WsStatus.outdated) {
      dispatch(setStatusAction(WsStatus.outdated));
    }
  }, [dispatch, lastMessage]);
};
