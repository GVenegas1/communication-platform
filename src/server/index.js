const http = require('http').createServer(); // Express for http server, may be best???

//function to take http function as an argument 
const io = request('socket.io')(http, {
    cors: { origin: "*" } //event base system allowing any URL to access backEnd Url
});

//listen from user from the frontEnd
io.on('connection', (socket) => {
    console.log('a user connected');

    //listen to any custom event(message)
    socket.on('message', (message) => {
    console.log(message);
    //clients listening and push it to everyone
    io.emit('message',`${socket.id.substr(0,2)} said ${message}`);
    })
});

http.litten(8080, () => console.log('listening on http://localhost:8080'));