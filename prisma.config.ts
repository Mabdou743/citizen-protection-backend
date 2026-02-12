import { defineConfig } from "prisma/config";
import envConfig from "src/config/env.config";
import 'dotenv/config';


export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
