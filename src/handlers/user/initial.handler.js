import { addUser } from '../../session/user.session.js';
import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds.js';
import { createResponse } from '../../utils/response/createResponse.js';
import { handlerError } from '../../utils/error/errorHandler.js';
import { getGameSession } from '../../session/game.session.js';

const initialHandler = async ({ socket, userId, payload }) => {
  try {
    console.log('######', payload.playerId);
    let { deviceId, playerId, latency } = payload;
    console.log(playerId);
    const user = addUser(socket, deviceId, playerId, latency);
    const gameSession = getGameSession();
    gameSession.addGameUser(user);

    // 유저 정보 응답 생성
    const initialResponse = createResponse(HANDLER_IDS.INITIAL, RESPONSE_SUCCESS_CODE, {
      userId: deviceId,
    });

    // 소켓을 통해 클라이언트에게 응답 메시지 전송
    socket.write(initialResponse);
  } catch (error) {
    handlerError(socket, error);
  }
};

export default initialHandler;
