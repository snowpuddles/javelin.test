import * as j from "@javelin/ecs";
import * as jn from "@javelin/net";
import MainLoop from "mainloop.js";

let Pos = j.value({ x: "number", y: "number", z: "number" });
let Vel = j.value({ x: "number", y: "number", z: "number" });
let Player = j.type(Pos, Vel);

const app = j.app();
MainLoop.setUpdate(() => {
  app.step();
}).start();
