import { CSSEffect } from "@donkeyclip/motorcortex";

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