const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 5000; // Change this to your desired port

// Define routes for each microservice
app.use('/users', createProxyMiddleware({ target: 'http://localhost:3001/users', changeOrigin: true }));
app.use('/product', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));
app.use('/supplier', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));
app.use('/order', createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: true }));

app.listen(port, () => {
  console.log(`API Gateway running on http://localhost:${port}`);
});
