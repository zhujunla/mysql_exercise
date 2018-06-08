module.exports=(io)=>{
    io.on('connection', function (socket) {
        // socket.emit('news', 123);
        socket.on('getNews', function (data) {
            console.log(data)
            socket.broadcast.emit('news', data);
        });
    });
}