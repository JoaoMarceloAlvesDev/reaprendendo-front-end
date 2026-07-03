



export const API_URL = import.meta.env.VITE_API_URL || 'http://reaprendendo-back-end.up.railway.app';

import { io } from 'socket.io-client';
export const socket = io(API_URL);