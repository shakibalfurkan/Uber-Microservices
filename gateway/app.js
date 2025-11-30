import express from "express";
import expressProxy from "express-http-proxy";

const app = express();
const PORT = 3000;

app.use("/user", expressProxy("http://localhost:3001"));
app.use("/captain", expressProxy("http://localhost:3002"));

app.listen(PORT, () => {
  console.log(`API Gateway server is running at http://localhost:${PORT}`);
});
