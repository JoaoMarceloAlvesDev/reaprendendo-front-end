
import { io } from 'socket.io-client';


export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';


export const socket = io(API_URL, {
  autoConnect: true,
});