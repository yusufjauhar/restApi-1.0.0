// import express from "express";
// import FileUpload from "express-fileupload";
// import cors from "cors";
// import ProductRoute from "./routes/ProductRoute.js";

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(FileUpload());
// app.use(express.static("public"));
// app.use(ProductRoute);

// app.listen(5000, ()=> console.log('Server Up and Running...'));



import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import { Sequelize } from "sequelize";

// Database configuration
const db = new Sequelize('railway', 'root', 'kSZPjBsXCZQaArKcLkEfqGdPUmjHbeeC', {
  host: 'monorail.proxy.rlwy.net',
  port: 12922,
  dialect: "mysql"
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

const startServer = async () => {
  try {
    await db.authenticate();
    console.log('Database connected successfully.');

    app.listen(5000, () => {
      console.log('Server Up and Running on port 5000...');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
