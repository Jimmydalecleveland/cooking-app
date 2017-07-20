import { headline, clicklink } from './dom-selectors.js';

clicklink.addEventListener('click', headlineStateToggle);

var headlineActive = false;

var keyframesIn = [
  {
    transform: 'translateX(1000px) scaleY(2.5) scaleX(.2)',
    transformOrigin: '50% 0', filter: 'blur(40px)', opacity: 0
  },
  {
    transform: 'translateX(0) scaleY(1) scaleX(1)',
    transformOrigin: '50% 50%',
    filter: 'blur(0)',
    opacity: 1
  }
];

var keyframesOut = [
  {
    transform: 'translateX(0) scaleY(1) scaleX(1)',
    transformOrigin: '50% 50%',
    filter: 'blur(0)',
    opacity: 1
  },
  {
    transform: 'translateX(1000px) scaleY(2.5) scaleX(.2)',
    transformOrigin: '50% 0', filter: 'blur(40px)', opacity: 0
  }
];

function headlineStateToggle() {
  headlineActive = !headlineActive;

  headlineAnimate();
}

function headlineAnimate() {
  if (headlineActive) {
    headline.animate(keyframesOut, 500);
  } else {
    headline.animate(keyframesIn, 500);
  }
}