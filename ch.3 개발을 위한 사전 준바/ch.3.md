# 개발을 위한 사전 준비

처음 노드 서버는 3.2.js 파일과 같이 http 모듈을 require하여 서버와 port로 시작한다.<br/>

    const http = require('http')
    const port = 5000

    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World')
    })

    server.listen(port, (err) => {
        if(err) {
            console.log(err)
        }
        console.log(`server in runing on ${port}`)
    })

    > node 3.2.js

위 명령어로 서버를 실행할 수 있고 5000번 port로 접근 시 hello world가 나타나게 된다.

여기서 프로그램 접속을 종료하게 되면 서버도 즉시 동작을 정지하는 것을 방지하기 위해 forever라는 패키지를 이용한다.

    npm install forever -g
설치 이후

    forever start 3.2.js
로 서버를 실행 하면 중간에 접속이 끊겨도 서버는 실행되어 살아있다.

현재 forever 를 이용해서 실행되는 서버의 목록은

    forever list
로 확인할 수 있으며 중지는

    forever stop 3.2.js
로 멈출 수 있다.

서버의 로그를 남기고 싶다면

    forever start -a -l [path] [server.js]
위 명령어로 실행 시 path부분에 로그가 남게 된다.