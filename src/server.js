import http from 'node:http'

const server = http.createServer((req, res) => {
  return res.end('Hello Raphael')
})

server.listen(3333);