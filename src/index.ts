import { Hono } from "hono";
import { handle, LambdaContext, LambdaEvent } from "hono/aws-lambda";

type Bindings = {
  event: LambdaEvent;
  lambdaContext: LambdaContext;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => c.json({ message: "Hello World" }));

export const handler = handle(app);
