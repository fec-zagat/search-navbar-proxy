const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
var proxy = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', proxy({ target: 'http://localhost:3004/', changeOrigin: true }))
app.use('/', proxy({ target: 'http://localhost:3001/', changeOrigin: true }))
app.use('/', proxy({ target: 'http://localhost:3002/', changeOrigin: true }))
app.use('/', proxy({ target: 'http://localhost:3003/', changeOrigin: true }))



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});