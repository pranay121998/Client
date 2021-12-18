const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path');
const socketio = require('socket.io')
const server = require('http').createServer(app);
const io =socketio(server);
const formateMessage = require('./utils/message');
const {getCurrentUser,getRoomUsers,userJoin,userLeave} = require('./utils/users');


const PORT = 8000 || process.env.PORT;
app.use(express.static(path.join(__dirname,'dist/client')))
app.use(express.json())

io.on('connection',(socket)=>{
    console.log('new connection is made');

    socket.on('joinRoom',userDetails=>{ 
        console.log(userDetails,"has joined the chat")
        user = userJoin(socket.id,userDetails.username,userDetails.room);
           
        socket.join(user.room);
        socket.emit('message',formateMessage("chatBot",'welcome new user'))//'welcome new user'

        socket.broadcast.to(user.room).emit('message',formateMessage("chatBot",`${user.username} has joind the chat`))
             

    })

    socket.on('chatMessage',msg=>{
        // console.log(msg,formateMessage('user',msg));
        const user=getCurrentUser(socket.id);
        io.to(user.room).emit('message',formateMessage(user.username,msg));
    })


})





server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})