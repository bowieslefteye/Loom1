const http = require('http'),
  rightNow = new Date().toLocaleString(),
  content = `<!doctype html>
  <html>
    <body>
      <h1> Inertia is a property of matter </h1>
      <p>
        The time is: ${rightNow}
      </p>
    </body>
  </html>`;

const server = http.createServer((req, res) => {
  res.end(content);
});

server.listen(process.env.PORT || 3000);
