import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { cubeRotate,opacity1 } from "./incidents";
import { initParams } from "./initParams";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;800&display=swap`,
    },
  ],
});

clip.addIncident(cubeRotate(".cube",1000),0)
clip.addIncident(opacity1(".intro .letter",100,"@stagger(0, 600)"),700)


