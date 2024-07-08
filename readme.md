#TCP 게임 서버 만들기 TCP_GAME

# tcp-game-server

#서버 TEST
![img1 daumcdn](https://github.com/HyuneonY/tcp-game-server/assets/37572040/6b32a163-8011-4583-b1b9-6481f00cdf46)

#디렉토리 구조
tcp_game
┣ 📂assets
┃ ┣ 📜item.json
┃ ┣ 📜item_unlock.json
┃ ┗ 📜stage.json
┗ 📂src
┣ 📂classes // 인스턴스 class 들을 정의  
 ┃ ┗ 📂models
┃ ┃ ┣ 📜game.class.js
┃ ┃ ┗ 📜user.class.js
┣ 📂config // 환경변수  
 ┃ ┗ 📜config.js
┣ 📂constants // 상수 관리
┃ ┣ 📜env.js
┃ ┣ 📜handlerIds.js
┃ ┗ 📜header.js
┣ 📂events // socket 이벤트
┃ ┣ 📜onConnection.js
┃ ┣ 📜onData.js
┃ ┣ 📜onEnd.js
┃ ┗ 📜onError.js
┣ 📂handlers // 핸들러 관리
┃ ┣ 📂game
┃ ┃ ┗ 📜locationUpdate.handler.js
┃ ┣ 📂user
┃ ┃ ┗ 📜initial.handler.js
┃ ┗ 📜index.js
┣ 📂init // 서버 초기화
┃ ┣ 📜assets.js
┃ ┣ 📜index.js
┃ ┗ 📜loadProtos.js
┣ 📂protobuf // 패킷 구조
┃ ┣ 📂notification
┃ ┃ ┗ 📜notification.proto
┃ ┣ 📂request
┃ ┃ ┣ 📜common.proto
┃ ┃ ┣ 📜game.proto
┃ ┃ ┗ 📜initial.proto
┃ ┣ 📂response
┃ ┃ ┗ 📜response.proto
┃ ┗ 📜packetNames.js
┣ 📂session // 세션 관리
┃ ┣ 📜game.session.js
┃ ┣ 📜sessions.js
┃ ┗ 📜user.session.js
┣ 📂utils // 그 외 필요한 함수들 선언
┃ ┣ 📂error
┃ ┃ ┣ 📜customError.js
┃ ┃ ┣ 📜errorCodes.js
┃ ┃ ┗ 📜errorHandler.js
┃ ┣ 📂notification
┃ ┃ ┗ 📜game.notification.js
┃ ┣ 📂parser
┃ ┃ ┗ 📜packetParser.js
┃ ┗ 📂response
┃ ┃ ┗ 📜createResponse.js
┗ 📜server.js

#구현한 기능 목록

- 프로젝트 구성
  - 게임 인스턴스 생성
- 유저 접속
  - 유저 인스턴스 생성
  - 위치 패킷 교환
