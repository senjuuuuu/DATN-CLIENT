import { useEffect, useRef } from 'react';

export function useClickOutside(handler: () => void) {
  let domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!domNode.current) throw Error('divRef is not assigned');
    let maybeHandler = (event: any) => {
      if (!domNode.current?.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
}
