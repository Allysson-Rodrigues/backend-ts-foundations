import express, {
	type Application,
	type Request,
	type Response,
} from "express";
import healthRoutes from "./main/config/health-routes.js";

const app: Application = express();

app.use(express.json());

// Root endpoint
app.get("/", (req: Request, res: Response) => {
	res.send("Backend TypeScript Foundations | Allysson Rodrigues");
});

// Modular routes
app.use("/api", healthRoutes);

export default app;
