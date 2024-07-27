import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
//import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import adminroutes from "./routes/admin.js";
import teacherroutes from "./routes/teacher.js";
import studentroutes from "./routes/student.js";

const app = express();
config({ path: "./.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );
app.use("/api/v1/admin", adminroutes);
app.use("/api/v1/student", studentroutes);
app.use("/api/v1/teacher", teacherroutes);

dbConnection();

//app.use(errorMiddleware);
export default app;