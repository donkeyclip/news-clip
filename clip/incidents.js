import { CSSEffect, loadPlugin } from "@donkeyclip/motorcortex";
import MCVideo from "@kissmybutton/motorcortex-video";
const VideoPlugin = loadPlugin(MCVideo);

export const cubeRotate = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
          transform: {
             rotateX: '-90deg',
             rotateY: '90deg'
          }
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const opacity1 = (selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 1,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );

  export const opacity = (selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 0,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );

  export const moveTop = (
    top,
    selector,
    duration,
    delay = 0,
    easing = "linear"
  ) =>
    new CSSEffect(
      {
        animatedAttrs: {
          top,
        },
      },
      {
        selector,
        duration,
        easing,
        delay,
      }
    );
  
  export const moveBottom = (
    bottom,
    selector,
    duration,
    delay = 0,
    easing = "linear"
  ) =>
    new CSSEffect(
      {
        animatedAttrs: {
          bottom,
        },
      },
      {
        selector,
        duration,
        easing,
        delay,
      }
    );
  
  export const moveLeft = (
    left,
    selector,
    duration,
    delay = 0,
    easing = "linear"
  ) =>
    new CSSEffect(
      {
        animatedAttrs: {
          left,
        },
      },
      {
        selector,
        duration,
        easing,
        delay,
      }
    );
  
  export const moveRight = (
    right,
    selector,
    duration,
    delay = 0,
    easing = "linear"
  ) =>
    new CSSEffect(
      {
        animatedAttrs: {
          right,
        },
      },
      {
        selector,
        duration,
        easing,
        delay,
      }
    );
  
  export const heightMove = (height, selector, duration, easing = "linear") =>
    new CSSEffect(
      {
        animatedAttrs: {
          height,
        },
      },
      {
        selector,
        duration,
        easing,
      }
    );
  
  export const widthMove = (width, selector, duration,delay = 0, easing = "linear") =>
    new CSSEffect(
      {
        animatedAttrs: {
          width,
        },
      },
      {
        selector,
        duration,
        delay,
        easing,
      }
    );
  

  export const video = (source,selector) => new VideoPlugin.Clip(
    {
      sources: [source],
      width: 1920,
      height: 1080,
    },
    {
      selector: selector,
    },
  );
  export const playback = (duration) => new VideoPlugin.Playback({
    selector: "!#video", 
    duration: duration,
  });
