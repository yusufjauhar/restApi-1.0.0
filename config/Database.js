import { Sequelize } from "sequelize";

const db = new Sequelize('railway', 'root', 'kSZPjBsXCZQaArKcLkEfqGdPUmjHbeeC', {
  host: 'monorail.proxy.rlwy.net',
  port: 12922,
  dialect: "mysql"
});

export default db;
