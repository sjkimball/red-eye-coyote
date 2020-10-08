import {gsap} from "gsap"

const iconTl = () => {
  const tl = gsap.timeline({duration: 0.25});
  tl.to("#top", {
    attr: {
      y1: "22",
    },
    stroke: "#F2F2F2"
  });
  tl.to("#middle", {
    x: "24",
    opacity: "0",
  }, "<");
  tl.to("#bottom", {
    attr: {
      y1: "2"
    },
    stroke: "#F2F2F2"
  }, "<");
  return tl;
}

const maskTl = () => {
  gsap.set("#black", {
    fill: "#fff",
    transformOrigin: "left center"
  });
  const tl = gsap.timeline({duration: 0.25});
  tl.from("#black", {
    scaleY: 0
  });
  return tl;
}

const linksTl = () => {
  const tl = gsap.timeline({duration: 0.5});
  tl.set("#nav-links", {clearProps: true});
  tl.set(".nav-link", {clearProps: true});
  tl.to("#nav-links", {
    display: "flex",
    height: "calc(100vh - 48px)",
    paddingTop: "2rem"
  });
  tl.to(".nav-link", {
    opacity: 1,
    stagger: 0.2
  });
  return tl;
}

export {iconTl, maskTl, linksTl};