import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);



const PORT = 5000
app.listen(process.env.PORT || PORT,()=> console.log('run server' + PORT) );
// app.listen(5000, ()=> console.log('Server Up and Running...'));




