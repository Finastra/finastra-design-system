import { Placement } from '@popperjs/core';

export function newCustomEvent(type: string, detail = {}) {
  return new CustomEvent(type, {
    detail,
    bubbles: true,
    composed: true
  });
}

export function makeOverlayPath(width = 0, height = 0, x = 0, y = 0, r = 0) {
  width = width + r * 2;
  height = height + r * 2;
  x = x - r;
  y = y - r;
  const { innerWidth: w, innerHeight: h } = window;
  return `M${w},${h}\
          H0\
          V0\
          H${w}\
          V${h}\
          Z\
          M${x + r},${y}\
          a${r},${r},0,0,0-${r},${r}\
          V${height + y - r}\
          a${r},${r},0,0,0,${r},${r}\
          H${width + x - r}\
          a${r},${r},0,0,0,${r}-${r}\
          V${y + r}\
          a${r},${r},0,0,0-${r}-${r}\
          Z`;
}

export function getElement(selector: string): Promise<any> {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

export function getCenterPopperOptions() {
  const popperOptions = {
    placement: 'top',
    strategy: 'fixed',
    modifiers: [
      {
        name: 'applyStyles',
        fn({ state }: any) {
          Object.keys(state.elements).forEach((name) => {
            if (name !== 'popper') {
              return;
            }
            const style = {
              position: 'fixed',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            };

            const attributes = state.attributes[name] || {};
            const element = state.elements[name];

            Object.assign(element.style, style);
            element?.animate(getSlideKeyframe('top', '-50%', '-50%', '15%'), ANIMATION_OPTIONS);
            Object.keys(attributes).forEach((name) => {
              const value = attributes[name];
              if (value === false) {
                element.removeAttribute(name);
              } else {
                element.setAttribute(name, value === true ? '' : name === 'data-popper-placement' ? 'center' : value);
              }
            });
          });
        }
      },
      {
        name: 'computeStyles',
        options: {
          adaptive: false
        }
      }
    ]
  };

  return popperOptions;
}

export function getSlideKeyframe(from: Placement, targetX: string, targetY: string, offset = '24px'): Keyframe[] {
  const endFrame = {
    transform: `translate(${targetX}, ${targetY})`,
    opacity: '1'
  };

  let result: Keyframe[];
  switch (from) {
    case 'top':
    case 'top-start':
    case 'top-end':
      result = [
        {
          transform: `translate(${targetX}, calc(${targetY} - ${offset})`,
          opacity: '0'
        },
        endFrame
      ];
      break;
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      result = [
        {
          transform: `translate(${targetX}, calc(${targetY} + ${offset}))`,
          opacity: '0'
        },
        endFrame
      ];
      break;
    case 'left':
    case 'left-start':
    case 'left-end':
      result = [
        {
          transform: `translate(calc(${targetX} - ${offset}), ${targetY})`,
          opacity: '0'
        },
        endFrame
      ];
      break;
    case 'right':
    case 'right-start':
    case 'right-end':
      result = [
        {
          transform: `translate(calc(${targetX} + ${offset}), ${targetY})`,
          opacity: '0'
        },
        endFrame
      ];
      break;
    case 'auto':
    case 'auto-start':
    case 'auto-end':
    default:
      result = [
        {
          transform: `scale(0.9)`,
          opacity: '0'
        },
        {
          transform: `scale(1)`,
          opacity: '1'
        }
      ];
      break;
  }
  return result;
}

export const ANIMATION_OPTIONS: KeyframeAnimationOptions = {
  duration: 450,
  easing: 'ease-in-out',
  iterations: 1,
  fill: 'forwards'
};

export function strTemplate(template: string, context: {[key: string] : string | number}): string {
  const templateRegex = /(\\)?\$\{([^\{\}\\]+)\}/g;

  return template.replace(templateRegex, matched => {
    const exp = matched[0] === '\\' ? matched.slice(1) : matched.match(/\{(.*)\}/)![1];
    
    return context.hasOwnProperty(exp) ? String(context[exp]) : matched
  })
}