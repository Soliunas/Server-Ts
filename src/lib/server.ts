import http, { IncomingMessage, ServerResponse } from 'node:http';

type Server = {
    init: () => void;
    httpServer: any;
}

const server = {} as Server;

server.httpServer = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url);
    let responseContent = '';

    if (req.url === '/') {
        responseContent = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sherlock</title>
            <link rel="stylesheet" type="text/css" href="styles.css"/>
        </head>
        <body>
            <main>
              <h3>404</h3>
              <div class='first'><p>Looks like this page is missing.<br> Don't worry though, our best<br> man is on the case.</p></div>
              <div class='second'><p>Meanwhile, why don't try again by going</p></div>
              <a href='#'><button>Back home</button></a>
              <img src="sherlock.png" alt="sherlock">
            </main>
        </body>
        </html>`
    }

    if (req.url === '/css/main.css') {
        responseContent = `body {
            background-color: rgb(234, 236, 237);
            font-family: Arial, Helvetica, sans-serif;
        }
        h3 {
            position: absolute;
            right: 320px;
            bottom: 200px;
            color: rgb(52, 64, 76);
            font-size: 160px;
            font-weight: bold;
        }
        button {
            position: absolute;
            right: 355px;
            bottom: 180px;
            background-color: rgb(104, 111, 138);
            color: rgb(251, 252, 252);
            width: 180px;
            height: 70px;
            text-transform: uppercase;
            font-weight: 550;
            letter-spacing: 2px;
        }
        .first {
            position: absolute;
            right: 300px;
            bottom: 280px;
            color: rgb(109, 108, 129);
            font-size: 19px;
            text-align: center;
            font-weight: 520;
        }
        .second {
            position: absolute;
            right: 330px;
            bottom: 250px;
            color: rgb(157, 156, 172);
            font-size: 13px;
            text-align: center;
        }
        img {
          position: absolute;
          width: 360px;
          height: 560px;
          margin-top: 80px;
          margin-left: 270px;
          margin-bottom: -60px;
        }
        main {
            width: 100%;
            margin: 25px;
        }`;
    }

    if (req.url ==='/css/button.css') {
        responseContent = ``;
    }

    if (req.url ==='/favicon.ico') {
        responseContent = 'FAVICON ICO FAILAS...';
    }

    return res.end(responseContent);
})

server.init = () => {
   server.httpServer.listen(4410, () => {
    console.log('Serveris sukasi ant http://localhost:4410/');
   });
};

export { server };