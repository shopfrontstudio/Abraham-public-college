import { gsap } from 'gsap'

import { CustomEase } from 'gsap/CustomEase'
import { CustomBounce } from 'gsap/CustomBounce'
import { CustomWiggle } from 'gsap/CustomWiggle'
import { RoughEase, ExpoScaleEase, SlowMo } from 'gsap/EasePack'
import { Draggable } from 'gsap/Draggable'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { EaselPlugin } from 'gsap/EaselPlugin'
import { Flip } from 'gsap/Flip'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Observer } from 'gsap/Observer'
import { Physics2DPlugin } from 'gsap/Physics2DPlugin'
import { PhysicsPropsPlugin } from 'gsap/PhysicsPropsPlugin'
import { PixiPlugin } from 'gsap/PixiPlugin'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import { TextPlugin } from 'gsap/TextPlugin'

// CustomBounce and CustomWiggle both build on CustomEase, so it must be
// registered first. ScrollSmoother builds on ScrollTrigger.
gsap.registerPlugin(
  CustomEase,
  CustomBounce,
  CustomWiggle,
  Draggable,
  DrawSVGPlugin,
  EaselPlugin,
  Flip,
  InertiaPlugin,
  MotionPathPlugin,
  MorphSVGPlugin,
  Observer,
  Physics2DPlugin,
  PhysicsPropsPlugin,
  PixiPlugin,
  ScrambleTextPlugin,
  ScrollToPlugin,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  TextPlugin
)

// Dev-only debugging helpers — never registered in a production build.
if (import.meta.env.DEV) {
  const [{ GSDevTools }, { MotionPathHelper }] = await Promise.all([
    import('gsap/GSDevTools'),
    import('gsap/MotionPathHelper'),
  ])
  gsap.registerPlugin(GSDevTools, MotionPathHelper)
}

export {
  gsap,
  CustomEase,
  CustomBounce,
  CustomWiggle,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  Draggable,
  DrawSVGPlugin,
  EaselPlugin,
  Flip,
  InertiaPlugin,
  MotionPathPlugin,
  MorphSVGPlugin,
  Observer,
  Physics2DPlugin,
  PhysicsPropsPlugin,
  PixiPlugin,
  ScrambleTextPlugin,
  ScrollToPlugin,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  TextPlugin,
}
