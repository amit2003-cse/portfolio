"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;

          const interval = setInterval(() => {
            start++;
            setCount(start);

            if (start === number) clearInterval(interval);
          }, 500);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [number]);

  return (
    <div ref={ref}>
      <h2 className="text-5xl font-bold">+{count}</h2>
      <p className="text-neutral-500 text-sm mt-2">{label}</p>
    </div>
  );
}