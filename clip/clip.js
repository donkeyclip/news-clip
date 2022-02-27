import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { cubeRotate,opacity1, opacity, moveBottom, moveLeft, moveRight, moveTop, widthMove, heightMove,video ,playback} from "./incidents";
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
      src: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600;800&display=swap`,
    },
  ],
});
const video1 = video("assets/man-and-woman-talk.mp4",".slide1");
const video2 = video("assets/world-news.mp4",".slide2");
const video3 = video("assets/man-talk.mp4",".slide3");
const video4 = video("assets/woman-talk.mp4",".slide4");
const video5 = video("assets/demonstration.mp4",".slide5");

clip.addIncident(cubeRotate(".cube",1000),0)
clip.addIncident(opacity1(".intro .letter",100,"@stagger(0, 600)"),700)
clip.addIncident(opacity(".intro",1),2100)
clip.addIncident(video1,2100)
video1.addIncident(playback(6000),0)
clip.addIncident(moveRight("0px",".slide1 .location",100),4200)
clip.addIncident(widthMove("100%",".slide1 .location-wrapper .background",300),4000)
clip.addIncident(opacity1(".slide1 .line1",500),2100)
clip.addIncident(moveTop("75%",".slide1 .line1",500),2100)
clip.addIncident(heightMove("15px",".slide1 .line1",500),2100)
clip.addIncident(widthMove("40%",".slide1 .line2",6000),2100)
clip.addIncident(moveTop("0px",".slide1 .word",300,"@stagger(0,800)"),2500)
clip.addIncident(moveRight("0px",".slide1 .source",700),3300)
clip.addIncident(opacity(".slide1",1),8100)
clip.addIncident(video2,8100)
video2.addIncident(playback(7900),0)
clip.addIncident(moveTop("-5px",".slide2 .text",300),8800)
clip.addIncident(moveTop("-80px",".slide2 .text",300),10400)
clip.addIncident(moveTop("-140px",".slide2 .text",300),12000)
clip.addIncident(moveTop("-210px",".slide2 .text",300),13600)
clip.addIncident(opacity1(".slide2 .line1",400),8200)
clip.addIncident(widthMove("35%",".slide2 .line1",4000),8400)
clip.addIncident(widthMove("100%",".slide2 .line2",4000),8400)
clip.addIncident(moveRight("0px",".slide2 .location",100),12200)
clip.addIncident(widthMove("100%",".slide2 .location-wrapper .background",300),12000)
clip.addIncident(moveBottom("-20%",".slide2 .text-wrapper",300),15200)
clip.addIncident(moveBottom("-10%",".slide2 .line1",300),15200)
clip.addIncident(opacity(".slide2",1),16000)
clip.addIncident(video3,16000)
video3.addIncident(playback(5000),0)
clip.addIncident(moveTop("0px",".slide3 .word",300,"@stagger(0,800)"),16300)
clip.addIncident(widthMove("33%",".slide3 .line",4500),16300)
clip.addIncident(moveLeft("10%",".slide3 .line",400),16300)
clip.addIncident(moveTop("0%",".slide3 .background",500),18000)
clip.addIncident(opacity(".slide3",1),21000)
clip.addIncident(video4,21000)
video4.addIncident(playback(5500),0)
clip.addIncident(widthMove("100%",".slide4 .background, .slide4 .background-back",200),22000)
clip.addIncident(opacity1(".slide4 .text",1),22200)
clip.addIncident(moveLeft("3%",".slide4 .text",400),22200)
clip.addIncident(opacity1(".slide4 .letter",100,"@stagger(0,1000)"),22800)
clip.addIncident(moveTop("0px",".slide4 .subtitle",400),23000)
clip.addIncident(widthMove("100%",".slide4 .line",2300),22800)
clip.addIncident(opacity(".slide4",1),26500)
clip.addIncident(video5,26500)
video5.addIncident(playback(5000),0)
clip.addIncident(moveRight("0px",".slide5 .location",300),28600)
clip.addIncident(widthMove("40px",".slide5 .location svg",400),28900)
clip.addIncident(heightMove("40px",".slide5 .location svg",400),28900)
clip.addIncident(widthMove("100%",".slide5 .line1",1400),28600)
clip.addIncident(moveLeft("10px",".slide5 .title",800),27000)
clip.addIncident(opacity1(".slide5 .title",500),27100)
clip.addIncident(widthMove("100%",".slide5 .background",400),26800)
clip.addIncident(moveBottom("0px",".slide5 .line2",400),26800)
clip.addIncident(opacity1(".slide5 .line2",300),26800)
clip.addIncident(opacity1(".slide5 .text",300),27100)
clip.addIncident(opacity(".slide5",1),31500)

