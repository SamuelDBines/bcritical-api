const express = require('express');
const app = express();
const path = require('path');
let fs = require('fs');
let cors = require('cors');

const https = require('https');
const http = require('http');
const authorized = require('./common/authorized');
const unless = require('./common/unless');
const allowedRoutes = ['/register', '/login', '/verify'];

let key = fs.readFileSync('./server.key');
let cert = fs.readFileSync('./server.cert');
let options = {
  key: key,
  cert: cert
};
const port = 3000;
const httpPort = 3001;

const bodyParser = require('body-parser');
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

// require('dotenv').config()
const router = express.Router();
let directory = 'src';
app.use('/', express.static('src'));

router.use(unless(authorized, allowedRoutes));
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, directory, 'index.html'));
});
router.get('/info', requireHTTPS, (req, res) => {
  res.sendFile(path.join(__dirname, directory, 'index.html'));
});

require('./routes/index')(app, router);

function requireHTTPS(req, res, next) {
  if (
    !req.secure &&
    req.get('x-forwarded-proto') !== 'https' &&
    process.env.NODE_ENV !== 'development'
  ) {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
app.use('/', router);

let server = https.createServer(options, app);
let httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`HTTP server starting on port : ${port}`);
});
server.listen(httpPort, () => {
  console.log(`server starting on port : ${httpPort}`);
});
