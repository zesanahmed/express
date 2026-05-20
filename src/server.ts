import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";
const app: Application = express();
const port = 3000;
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_elAXaFx4r3LE@ep-frosty-fire-aq9vslrh-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Express server",
    Author: "Zesan Ahmed",
  });
});

app.post("/", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  res.status(201).json({
    message: "Created",
    data: { name, email },
  });
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
