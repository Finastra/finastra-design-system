import { Observable, Subscriber } from 'rxjs';

export function resizeObserver(element: HTMLElement) {
  return new Observable<ResizeObserverEntry>(subscriber => {
    if ('ResizeObserver' in window === false) {
      // Loads polyfill asynchronously, only if required.
      import('@juggle/resize-observer').then(module => {
        // @ts-ignore
        window.ResizeObserver = module.ResizeObserver;
        return setupSubscription(element, subscriber);
      });
    } else {
      return setupSubscription(element, subscriber);
    }
  });
}

function setupSubscription(element: HTMLElement, subscriber: Subscriber<ResizeObserverEntry>) {
  const observer = new ResizeObserver(entries => {
    const entry = entries && entries[0];
    if (entry) {
      subscriber.next(entry);
    }
  });
  observer.observe(element);
  const unsubscribe = () => observer.unobserve(element);
  subscriber.add(unsubscribe);
}
