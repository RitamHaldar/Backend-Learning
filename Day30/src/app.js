import expres from "express"
import authRouter from "./routes/auth.routes.js"; 
const app = expres();

app.use("/api/register",authRouter);

export default app