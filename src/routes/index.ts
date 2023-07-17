import { Router } from "express";
import user from "./user";
import auth from "./auth";

const routes = Router();

// All auth operations will be available under the "auth" route prefix
routes.use("/auth", auth);
routes.use("/users", user);

export default routes;
