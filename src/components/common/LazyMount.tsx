'use client';

import { useState, useEffect, useRef } from 'react';

interface LazyMountProps {
  children: React.ReactNode;
  /** 마운트 전 placeholder 높이 (기본값: h-16) */
  fallbackClassName?: string;
}

/**
 * IntersectionObserver를 사용해 뷰포트에 진입할 때만 자식 컴포넌트를 마운트합니다.
 *
 * 사용 목적:
 * - cmdk Command 등 mount 시 scrollIntoView()를 호출하는 서드파티 컴포넌트가
 *   뷰포트 밖에 있을 때 의도치 않게 페이지를 스크롤하는 문제를 방지합니다.
 * - 뷰포트에 진입한 후 마운트되므로 scrollIntoView()는 no-op이 됩니다.
 */
export default function LazyMount({
  children,
  fallbackClassName = 'h-16',
}: LazyMountProps) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setMounted(true);
        observer.disconnect();
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {mounted ? children : <div className={fallbackClassName} />}
    </div>
  );
}
