import {gsap} from "gsap"

const messageTl = () => {
  const tl = gsap.timeline({repeat: -1});
  tl.to("#letterB", {
    duration: 2,
    fill: "black",
    opacity: 1,
    repeat: 1,
    repeatDelay: 2,
    yoyo: true
  });
  tl.to("#letterL", {
    duration: 2,
    fill: "black",
    opacity: 1,
    repeat: 1,
    repeatDelay: 2,
    yoyo: true
  }, ">");
  tl.to("#letterM", {
    duration: 2,
    fill: "black",
    opacity: 1,
    repeat: 1,
    repeatDelay: 2,
    yoyo: true
  }, ">");
  return tl;
}

export {messageTl};