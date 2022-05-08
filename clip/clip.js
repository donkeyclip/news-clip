import { HTMLClip, AudioPlayback, AudioEffect } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {
  cubeRotate,
  opacity1,
  opacity,
  moveBottom,
  moveLeft,
  moveRight,
  moveTop,
  widthMove,
  heightMove,
  video,
  playback,
} from "./incidents";
import { initParams } from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;800&display=swap`,
    },
  ],
  audioSources: [
    {
      src: initParams[0].value.song,
      id: "my-mp3",
      classes: ["songs"],
      base64: false,
    },
  ],
});

const songPlayback = new AudioPlayback({
  selector: "~#my-mp3",
  startFrom: 0,
  duration: 86500,
});

clip.addIncident(songPlayback, 0);

const effect = new AudioEffect(
  {
    animatedAttrs: {
      gain: 0,
    },
  },
  {
    selector: "~#my-mp3",
    duration: 1000,
  }
);

clip.addIncident(effect, 85500);

const video1 = video("@initParams.slide1.video", ".slide1");
const video2 = video("@initParams.slide2.video", ".slide2");
const video3 = video("@initParams.slide3.video", ".slide3");
const video4 = video("@initParams.slide4.video", ".slide4");
const video5 = video("@initParams.slide5.video", ".slide5");
const video6 = video("@initParams.slide6.video", ".slide6");
const video7 = video("@initParams.slide7.video", ".slide7");
const video8 = video("@initParams.slide8.video", ".slide8");
const video9 = video("@initParams.slide9.video", ".slide9");
const video10 = video("@initParams.slide10.video", ".slide10");
const video11 = video("@initParams.slide11.video", ".slide11");
const video12 = video("@initParams.slide12.video", ".slide12");

clip.addIncident(cubeRotate(".intro .cube", 1000), 0);
clip.addIncident(opacity1(".intro .letter", 100, "@stagger(0, 600)"), 700);
clip.addIncident(opacity(".intro", 1), 2100);
video1.addIncident(playback(6000), 0);
clip.addIncident(video1, 2100);
clip.addIncident(moveRight("0px", ".slide1 .location", 100), 4200);
clip.addIncident(
  widthMove("100%", ".slide1 .location-wrapper .background", 300),
  4000
);
clip.addIncident(opacity1(".slide1 .line1", 500), 2100);
clip.addIncident(moveTop("75%", ".slide1 .line1", 500), 2100);
clip.addIncident(heightMove("15px", ".slide1 .line1", 500), 2100);
clip.addIncident(widthMove("40%", ".slide1 .line2", 6000), 2100);
clip.addIncident(moveTop("0px", ".slide1 .word", 300, "@stagger(0,800)"), 2500);
clip.addIncident(moveRight("0px", ".slide1 .source", 700), 3300);
clip.addIncident(opacity(".slide1", 1), 8100);
video2.addIncident(playback(7900), 0);
clip.addIncident(video2, 8100);
clip.addIncident(moveTop("-5px", ".slide2 .text", 300), 8800);
clip.addIncident(moveTop("-80px", ".slide2 .text", 300), 10400);
clip.addIncident(moveTop("-140px", ".slide2 .text", 300), 12000);
clip.addIncident(moveTop("-210px", ".slide2 .text", 300), 13600);
clip.addIncident(opacity1(".slide2 .line1", 400), 8200);
clip.addIncident(widthMove("35%", ".slide2 .line1", 4000), 8400);
clip.addIncident(widthMove("100%", ".slide2 .line2", 4000), 8400);
clip.addIncident(moveRight("0px", ".slide2 .location", 100), 12200);
clip.addIncident(
  widthMove("100%", ".slide2 .location-wrapper .background", 300),
  12000
);
clip.addIncident(moveBottom("-20%", ".slide2 .text-wrapper", 300), 15200);
clip.addIncident(moveBottom("-10%", ".slide2 .line1", 300), 15200);
clip.addIncident(opacity(".slide2", 1), 16000);
video3.addIncident(playback(5000), 0);
clip.addIncident(video3, 16000);
clip.addIncident(
  moveTop("0px", ".slide3 .word", 300, "@stagger(0,800)"),
  16300
);
clip.addIncident(widthMove("33%", ".slide3 .line", 4500), 16300);
clip.addIncident(moveLeft("10%", ".slide3 .line", 400), 16300);
clip.addIncident(moveTop("0%", ".slide3 .background", 500), 18000);
clip.addIncident(opacity(".slide3", 1), 21000);
video4.addIncident(playback(5500), 0);
clip.addIncident(video4, 21000);
clip.addIncident(
  widthMove("100%", ".slide4 .background, .slide4 .background-back", 200),
  22000
);
clip.addIncident(opacity1(".slide4 .text", 1), 22200);
clip.addIncident(moveLeft("3%", ".slide4 .text", 400), 22200);
clip.addIncident(opacity1(".slide4 .letter", 100, "@stagger(0,1000)"), 22800);
clip.addIncident(moveTop("0px", ".slide4 .subtitle", 400), 23000);
clip.addIncident(widthMove("100%", ".slide4 .line", 2300), 22800);
clip.addIncident(opacity(".slide4", 1), 26500);
video5.addIncident(playback(5000), 0);
clip.addIncident(video5, 26500);
clip.addIncident(moveRight("0px", ".slide5 .location", 300), 28600);
clip.addIncident(widthMove("40px", ".slide5 .location svg", 400), 28900);
clip.addIncident(heightMove("40px", ".slide5 .location svg", 400), 28900);
clip.addIncident(widthMove("100%", ".slide5 .line1", 1400), 28600);
clip.addIncident(moveLeft("10px", ".slide5 .title", 800), 27000);
clip.addIncident(opacity1(".slide5 .title", 500), 27100);
clip.addIncident(widthMove("100%", ".slide5 .background", 400), 26800);
clip.addIncident(moveBottom("0px", ".slide5 .line2", 400), 26800);
clip.addIncident(opacity1(".slide5 .line2", 300), 26800);
clip.addIncident(opacity1(".slide5 .text", 300), 27100);
clip.addIncident(heightMove("260px", ".slide5 .image-wrapper", 300), 28300);
clip.addIncident(heightMove("240px", ".slide5 .image", 300), 28400);
clip.addIncident(opacity(".slide5", 1), 31500);
video6.addIncident(playback(5000), 0);
clip.addIncident(video6, 31500);
clip.addIncident(opacity1(".slide6 .live-tag", 300), 32500);
clip.addIncident(heightMove("85px", ".slide6 .title-wrapper", 400), 32500);
clip.addIncident(heightMove("100%", ".slide6 .text-wrapper", 400), 32500);
clip.addIncident(heightMove("30%", ".slide6 .content", 400), 32500);
clip.addIncident(
  moveTop("-8px", ".slide6 .title .letter", 400, "@stagger(0,700)"),
  33000
);
clip.addIncident(opacity1(".slide6 .text", 500), 33400);
clip.addIncident(opacity(".slide6", 1), 36500);
video7.addIncident(playback(5000), 0);
clip.addIncident(video7, 36500);
clip.addIncident(widthMove("100%", ".slide7 .title-wrapper", 300), 36800);
clip.addIncident(moveTop("20px", ".slide7 .title", 100), 37100);
clip.addIncident(heightMove("20%", ".slide7 .background", 300), 36800);
clip.addIncident(widthMove("100%", ".slide7 .text-wrapper", 200), 36800);
clip.addIncident(widthMove("100%", ".slide7 .background-back", 200), 37300);
clip.addIncident(opacity1(".slide7 .text", 1), 37500);
clip.addIncident(moveLeft("3%", ".slide7 .text", 400), 37500);
clip.addIncident(opacity(".slide7", 1), 41500);
video8.addIncident(playback(7000), 0);
clip.addIncident(video8, 41500);
clip.addIncident(heightMove("17%", ".slide8 .line", 200), 41900);
clip.addIncident(moveLeft("0px", ".slide8 .title", 400), 42100);
clip.addIncident(moveTop("-5px", ".slide8 .text", 300), 42100);
clip.addIncident(moveTop("-80px", ".slide8 .text", 300), 46100);
clip.addIncident(moveRight("0px", ".slide8 .source", 400), 43000);
clip.addIncident(moveLeft("0px", ".slide8 .source-tag", 400), 43000);
clip.addIncident(opacity(".slide8", 1), 48500);
video9.addIncident(playback(13000), 0);
clip.addIncident(video9, 48500);
clip.addIncident(moveLeft("0%", ".slide9 .line", 650), 48500);
clip.addIncident(
  moveTop("0px", ".slide9 .word", 400, "@stagger(0,400)"),
  49200
);
clip.addIncident(widthMove("100%", ".slide9 .background-back", 300), 49600);
clip.addIncident(widthMove("100%", ".slide9 .background", 300), 49750);
clip.addIncident(moveTop("20px", ".slide9 .text", 300), 50000);
clip.addIncident(moveTop("-80px", ".slide9 .text", 300), 52000);
clip.addIncident(moveTop("-180px", ".slide9 .text", 300), 54000);
clip.addIncident(moveTop("-280px", ".slide9 .text", 300), 56000);
clip.addIncident(moveTop("-380px", ".slide9 .text", 300), 58000);
clip.addIncident(
  moveTop("0px", ".slide9 .letter", 200, "@stagger(0,400)"),
  51000
);
clip.addIncident(moveTop("0px", ".slide9 .job", 300), 51000);
clip.addIncident(heightMove("100%", ".slide9 .person-line", 300), 51000);
clip.addIncident(
  moveTop("-100px", ".slide9 .letter", 200, "@stagger(0,200)"),
  55000
);
clip.addIncident(moveTop("100px", ".slide9 .job", 200), 55000);
clip.addIncident(heightMove("0%", ".slide9 .person-line", 300), 55000);
clip.addIncident(moveRight("0px", ".slide9 .source", 400), 54000);
clip.addIncident(moveLeft("0px", ".slide9 .source-tag", 400), 54000);
clip.addIncident(moveRight("100%", ".slide9 .source", 200), 60500);
clip.addIncident(moveLeft("100%", ".slide9 .source-tag", 200), 60500);
clip.addIncident(heightMove("0px", ".slide9 .text-wrapper", 300), 60500);
clip.addIncident(opacity(".slide9", 1), 61500);
video10.addIncident(playback(9000), 0);
clip.addIncident(video10, 61500);
clip.addIncident(cubeRotate(".slide10 .cube", 1000), 62000);
clip.addIncident(opacity1(".slide10 .letter", 100, "@stagger(0, 600)"), 62500);
clip.addIncident(heightMove("300px", ".slide10 .line", 1000), 62000);
clip.addIncident(opacity1(".slide10 .text-wrapper", 600), 62800);
clip.addIncident(moveTop("-170px", ".slide10 .content .text", 200), 65800);
clip.addIncident(moveRight("0px", ".slide10 .location", 400), 65600);
clip.addIncident(opacity(".slide10", 1), 70500);
video11.addIncident(playback(5000), 0);
clip.addIncident(video11, 70500);
clip.addIncident(widthMove("100%", ".slide11 .background-back", 300), 71500);
clip.addIncident(widthMove("98%", ".slide11 .background", 300), 71600);
clip.addIncident(opacity1(".slide11 .text", 1), 71800);
clip.addIncident(moveLeft("3%", ".slide11 .text", 400), 71800);
clip.addIncident(moveLeft("0px", ".slide11 .source-wrapper", 400), 72500);
clip.addIncident(opacity(".slide11", 1), 75500);
video12.addIncident(playback(11000), 0);
clip.addIncident(video12, 75500);
clip.addIncident(heightMove("85px", ".slide12 .title-wrapper", 400), 76000);
clip.addIncident(heightMove("100%", ".slide12 .text-wrapper", 400), 76000);
clip.addIncident(heightMove("30%", ".slide12 .content", 400), 76000);
clip.addIncident(
  moveTop("-8px", ".slide12 .title .letter", 400, "@stagger(0,700)"),
  76500
);
clip.addIncident(
  opacity1(".slide12 .box .letter", 100, "@stagger(0, 600)"),
  76800
);
clip.addIncident(moveLeft("0px", ".slide12 .location", 300), 77000);
clip.addIncident(widthMove("100%", ".slide12 .line", 1400), 77000);
clip.addIncident(opacity1(".slide12 .text", 500), 77000);
clip.addIncident(moveTop("-48px", ".slide12 .text", 300), 81000);
clip.addIncident(moveTop("-220px", ".slide12 .text", 300), 84000);
clip.addIncident(moveLeft("-100%", ".slide12 .location", 300), 81100);
clip.addIncident(widthMove("0%", ".slide12 .line", 400), 81000);
clip.addIncident(opacity1(".slide12 .img", 1), 81500);
clip.addIncident(widthMove("250px", ".slide12 .img", 400), 81500);
clip.addIncident(heightMove("250px", ".slide12 .img", 400), 81500);
clip.addIncident(moveLeft("0px", ".slide12 .name,.slide12 .job", 400), 82000);
clip.addIncident(opacity(".slide12", 500), 86000);
