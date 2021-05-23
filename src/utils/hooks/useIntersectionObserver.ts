import * as React from 'react';

type UseIntersectionObserverProps = {
  elementsQuery: string;
  onElementIntersected: (value: any) => void;
  rootMargin?: string;
  threshold?: number;
  useIndex?: boolean;
  idFormatter?: (id: string) => string;
};

const defaultIdFormatter = (id: string): string => {
  return `${id}-link-item`;
};

export const useIntersectionObserver = ({
  elementsQuery,
  onElementIntersected,
  rootMargin = '0px',
  threshold = 1.0,
  useIndex = false,
  idFormatter = defaultIdFormatter
}: UseIntersectionObserverProps) => {
  React.useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      const intersectedEntries = entries.filter(entry => entry.isIntersecting);

      if (intersectedEntries.length) {
        const id = intersectedEntries[0].target.id;

        if (useIndex) {
          const selectedIndex = elements.findIndex(
            element => element.id === id
          );

          onElementIntersected(selectedIndex);
        } else {
          onElementIntersected(idFormatter(id));
        }
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin,
      threshold
    });

    const elements = Array.from(document.querySelectorAll(elementsQuery));
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [onElementIntersected]);
};
