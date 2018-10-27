import mojs from 'mo-js'

const COLORS = {
  RED: '#FD5061',
  YELLOW: '#FFCEA5',
  BLACK: '#29363B',
  WHITE: 'white',
  VINOUS: '#A50710'
}

const bgBurst = new mojs.Burst({
  left: 0,
  top: 0,
  count: 3,
  radius: 0,
  degree: 0,
  isShowEnd: false,
  children: {
    fill: [COLORS.RED, COLORS.WHITE, COLORS.BLACK],
    radius: 'stagger(200, 2)',
    scale: { 0.25: 3 },
    duration: 500,
    delay: 'stagger(50)',
    easing: ['cubic.out', 'cubic.out', 'cubic.out'],
    isForce3d: true
  }
})

const burst1 = new mojs.Burst({
  left: 0,
  top: 0,
  count: 5,
  radius: { 50: 250 },
  children: {
    fill: 'white',
    shape: 'line',
    stroke: [COLORS.WHITE, COLORS.VINOUS],
    strokeWidth: 12,
    radius: 'rand(30, 60)',
    radiusY: 0,
    scale: { 1: 0 },
    pathScale: 'rand(.5, 1)',
    degreeShift: 'rand(-360, 360)',
    isForce3d: true
  }
})

const burst2 = new mojs.Burst({
  top: 0,
  left: 0,
  count: 3,
  radius: { 0: 250 },
  children: {
    shape: ['circle', 'rect'],
    points: 5,
    fill: [COLORS.WHITE, COLORS.VINOUS],
    radius: 'rand(30, 60)',
    scale: { 1: 0 },
    pathScale: 'rand(.5, 1)',
    isForce3d: true
  }
})

const CIRCLE_OPTS = {
  left: 0,
  top: 0,
  fill: COLORS.WHITE,
  scale: { 0.2: 1 },
  opacity: { 1: 0 },
  isForce3d: true,
  isShowEnd: false
}

const circle1 = new mojs.Shape({
  ...CIRCLE_OPTS,
  radius: 200
})

const circle2 = new mojs.Shape({
  ...CIRCLE_OPTS,
  radius: 240,
  easing: 'cubic.out',
  delay: 150
})

export default el => {
  const rect = el.getBoundingClientRect()

  const origin = {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2
  }

  burst1.tune(origin).generate().replay()

  burst2.tune(origin).generate().replay()

  circle1.tune(origin).replay()

  circle2.tune(origin).replay()

  bgBurst.tune(origin).replay()
}
