// src/server.js

import Server from 'socket.io';

export default function startServer(store) {
    //Initialize the Socket.IO server.
    const io = new Server().attach(8090);

    //Bind a listener called whenever an action is dispatched by
    //the store.
    store.subscribe(
        //Emits the *whole* state to everyone connected whenever
        //changes occur. This can be expensive, so consider
        //only emitting relevant subset/diffs instead of snapshots...
        () => io.emit('state', store.getState().toJS())
    );

    //Emit current state immediately on client connection.
    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
    });
}
