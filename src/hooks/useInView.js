import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setInView(false);
      }
    }, { 
      threshold: typeof threshold === 'number' ? threshold : 0.1, 
      rootMargin 
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, inView];
}
