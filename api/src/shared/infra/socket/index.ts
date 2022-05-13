import http from 'http'
import { Server } from 'socket.io'

export default {
  openConnection (server:http.Server) {
    const io = new Server(server, {
      cors: {
        origin: '*'
      }
    })

    io.on('connection', client => {
      console.log('Web Socket Connected')

      // client.emit('hello', `Hello from Backend ${new Date().getTime()}`)

      // client.on('front', message => {
      //   console.log(message)
      // })

      // client.on('disconnect', () => {
      //   console.log('disconnected')
      // })
    })
  }
}
