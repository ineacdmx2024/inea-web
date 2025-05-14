"use client";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number; // en milisegundos
}

const ScrollLoadSection = ({ children, delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [startTimer, setStartTimer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTimer(true); // empieza el temporizador
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (startTimer) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [startTimer, delay]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
};

export default ScrollLoadSection;

