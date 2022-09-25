import { Board, State } from '../../slices/types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBoardOrTaskId } from '../helpers';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

const wsUrl = `${process.env.REACT_APP_API}websocket`;
const topic = '/topic/board';

export const useUpdateBoard = () => {
  const stateBoard = useSelector((state: State) => state.board);
  const boardId: number | null = getBoardOrTaskId();

  const [board, setBoard] = useState<Board>(stateBoard);

  let stompClient: Stomp.Client | null = null;

  const subscribeToTopic = () => {
    stompClient?.subscribe(topic, (messageOutput) => {
      const data = JSON.parse(messageOutput.body);
      if (data.id === boardId) {
        setBoard(JSON.parse(messageOutput.body));
      }
    });
  };

  const makeConnect = () => {
    const socket = new SockJS(wsUrl);
    stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      subscribeToTopic();
    });
  };

  const makeDisconnect = () => {
    if (stompClient !== null) {
      stompClient?.disconnect(() => undefined, {});
    }
  };

  useEffect(() => {
    makeConnect();
    return () => makeDisconnect();
  }, []);

  return {
    board
  };
};
