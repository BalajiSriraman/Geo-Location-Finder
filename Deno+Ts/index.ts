import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { green ,red } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import routing from "./utils/routes.ts";
const port: number = 1403;
const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

const router = new Router();

router.get("/ping", ({ response }: { response: any }) => {
  response.body = {
    pong: "ping",
  };
});

router.get("/pong", ({ response }: { response: any }) => {
  response.body = {
    ping: "pong",
  };
});

router.use(routing.routes())

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`${red("Listening on:")} ${green(url)}`);
});


await app.listen({ port });
