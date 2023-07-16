import { Router } from "https://deno.land/x/oak/mod.ts";

const routing = new Router();

import worker from "./worker.ts";

routing
  .get("/", worker.details)

export default routing;
