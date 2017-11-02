// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use((req, res, next) => {
    const checkUrl = /^\/api\/users\/(.*)\/check\/?$/
    let checkFlag = checkUrl.test(req.path)
    let name = ''
    if (checkFlag) {
        name = req.url.match(checkUrl)[1]
    }

    if (name == 'will') {
        res.sendStatus(409)
    } else {
        next()
    }
})

// Add this before server.use(router)
server.use(jsonServer.rewriter({
    "/api/*": "/$1",
    "/users/:name": "/users?name=:name",
    "/users/:name/check": "/users?name=:name",
    "/outh2/token": "/token"
}))
server.use(router)

server.listen(3000, () => {
    console.log('JSON Server is running')
})