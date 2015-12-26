To setup a node.js http server to server up a Babylon app in the index.html:

Install node.js

Install connect and serve-static with NPM

    $ npm install

Create server.js file with this content:

    var connect = require('connect');
    var serveStatic = require('serve-static');
    connect().use(serveStatic(__dirname)).listen(8080);

Run with Node.js

    $ node server.js
  
      or

    $ npm start


Alternative option could be to use python to serve up the directory:

python -m SimpleHTTPServer

http://localhost:8000



