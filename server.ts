// server.ts - Next.js custom server with Socket.IO (Mac-friendly)
import { createServer } from 'http';
import { Server } from 'socket.io';
import next from 'next';
import { setupSocket } from '@/lib/socket';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const hostname = 'localhost';

async function startServer() {
  try {
    // Initialize Next.js app
    const app = next({ dev });
    const handle = app.getRequestHandler();

    await app.prepare();

    // Create HTTP server
    const httpServer = createServer(async (req, res) => {
      // Let Next.js handle everything
      await handle(req, res);
    });

    // Initialize Socket.IO
    const io = new Server(httpServer, {
      path: '/api/socketio',
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });

    // Setup socket event handlers
    setupSocket(io);

    // Start listening
    httpServer.listen(port, hostname, () => {
      console.log(`✅ Server ready on http://${hostname}:${port}`);
      console.log(`⚡ Socket.IO running at ws://${hostname}:${port}/api/socketio`);
    });
  } catch (error) {
    console.error('❌ Server startup failed:', error);
    process.exit(1);
  }
}

startServer();
