// import { gsap } from "gsap";
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

//register all plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MotionPathHelper, MorphSVGPlugin);

const mainTL = gsap.timeline();

mainTL.from("#triangle", {duration:1, drawSVG: "50% 50%"})
.to("#triangle", {duration:1, MorphSVG:"#Rectangle"})
.to("#triangle", {duration:1, MorphSVG:"#Ellipse"});