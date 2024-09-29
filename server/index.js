const app = require("express")();       
const server = require("http").createServer(app);  /* getting to the server by simply requiring http, a built in node module*/
const cors = require("cors");  /* middlewarepackage for requiring a cross origin request */

const io = require("socket.io")(server, {
    cors: {
        origin: "*",   /*This allows access from all origins*/
        methods: ["GET", "POST"] /*is an array of two strings get and post*/ 
    }
});

app.use(cors());    /* passing the app.use and calling it as a function */


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send('server is running.');
});

io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit("callended");
    });

    socket.on("calluser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("calluser", { signal: signalData, from, name });
    });

    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    });
});

server.listen(PORT, () => console.log('server listening on port: ${PORT}'));