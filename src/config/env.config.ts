// src/config/env.config.ts
import { registerAs } from '@nestjs/config';

export default registerAs('env', () => ({
  // App
  PORT: process.env.PORT || '3000',
  NODE_ENV: process.env.NODE_ENV || 'development',

  // Database (PostgreSQL)
  DATABASE_URL: process.env.DATABASE_URL || '',

}));
